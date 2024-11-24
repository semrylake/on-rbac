import { useSessionAuth } from "@/server/utils/session";
import axios from "axios";
import { ErrorCodes } from "vue";
import "@/server/api/utils/deletesession";
interface DataMenu {
  kode: string;
  nama: string;
  path: string;
  desc: string;
  status: string;
}
export default defineEventHandler(async (event) => {
  try {
    const session = await useSessionAuth(event);
    const token = session.data.token;
    const body = await readBody<DataMenu>(event);
    const datasubmit = {
      kode: body.kode,
      nama: body.nama,
      path: body.path,
      desc: body.desc,
      status: body.status,
       };
       const configdef = useRuntimeConfig();
    const configaxios = {
      method: "post",
      maxBodyLength: Infinity,
      url: configdef.public.apiBaseUrl + "/api/v1/menu/update-menu",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: datasubmit,
    };
    let success = false;
    let message = "";
    let errorMessage = "";
        await axios
          .request(configaxios)
          .then(function (response) {
            console.log(response.data);
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
              statusMessage: "failed submit :" + error.message,
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
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong: " + error,
    });
  }
});
