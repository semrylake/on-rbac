import { useSessionAuth } from "@/server/utils/session";
import axios from "axios";
interface Login {
  email: string;
  password: string;
}
// interface DataLogin {
//   status: boolean;
//   message: JSON;
// }
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Login>(event);
    if (body.email.length == 0) {
      return {
        status: false,
        message: "Email harus diisi",
      };
    }
    if (body.password.length == 0) {
      return {
        status: false,
        message: "Password harus diisi",
      };
    }
    const data = {
      email: body.email,
      password: body.password,
    };
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.SERVICE_URL + "/api/v1/auth/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    let datalogin = null;
    await axios
      .request(config)
      .then((response) => {
        datalogin = response.data;
        // // if(datalogin)
        // // return datalogin;
      })
      .catch((error) => {
        console.log(error);
        throw createError({
          statusCode: 500,
          statusMessage: "Something went wrong",
        });
      });
      console.log(datalogin)
    if (datalogin!.status == true) {
      if (datalogin!.token) {
        const session = await useSessionAuth(event);
        await session.update({
          token: datalogin!.token,
          email: datalogin!.email,
        });
        return {
          status: true,
          message: "Success Login",
        };
      } else {
        return {
          status: false,
          message: "Proses login gagal",
        };
      }
    } else {
      return {
        status: false,
        message: datalogin!.messages,
        error: datalogin!.error,
      };
    }
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});
