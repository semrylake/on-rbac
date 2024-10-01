import { useSessionAuth } from "@/server/utils/session";
interface Login {
  email: string;
  password: string;
}
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
    if (body.email == "jufentosemry@gmail.com" && body.password == "123456") {
      const session = await useSessionAuth(event);
      await session.update({
        name: "Semry",
        email: "jufentosemry@gmail.com",
      });
      return {
        status: true,
        message: "Success Login",
      };
    } else {
      return {
        status: false,
        message: "Email tidak terdaftar",
      };
    }
  } catch (error) {
    // console.log(error)
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});
