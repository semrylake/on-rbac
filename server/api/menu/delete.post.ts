import { useSessionAuth } from "@/server/utils/session";
import axios from "axios";
import { ErrorCodes } from "vue";
import "@/server/api/utils/deletesession";
interface DeleteData {
  kode: string;
}
export default defineEventHandler(async (event) => {
  try {
    const session = await useSessionAuth(event);
    const token = session.data.token;
    const body = await readBody<DeleteData>(event);
    const datadelete = {
      kode: body.kode,
    };
    const configaxios = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.SERVICE_URL + "/api/v1/menu/delete",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: datadelete,
    };
    let success = false;
    let message = "";
    let errorMessage = "";
    await axios
      .request(configaxios)
      .then(function (response) {
        if (response.data.status) {
          success = true;
          message = response.data.messages;
        } else {
          success = false;
          message = response.data.messages;
          errorMessage = response.data.error;
        }
      })
      .catch(async function (error) {
        // console.log(error.status);
        if (error.status == 401) {
          return sendRedirect(event, "/login");
        }
        throw createError({
          statusCode: error.status,
          statusMessage: "failed delete :" + error.message,
        });
      });
    if (success) {
      return {
        status: true,
        message: message,
      };
    } else {
      return {
        status: false,
        message: message,
        error: errorMessage,
      };
    }
    console.log(datadelete);
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong: " + error,
    });
  }
});