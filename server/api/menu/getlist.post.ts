import { useSessionAuth } from "@/server/utils/session";
import axios from "axios";
import { ErrorCodes } from "vue";
import "@/server/api/utils/deletesession";
export default defineEventHandler(async (event) => {
  const session = await useSessionAuth(event);
  const token = session.data.token;
  const configaxios = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.SERVICE_URL + "/api/v1/menu/getlist",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  let success = false;
  let resultdata = null;
  let pagination = null;

  await axios
    .request(configaxios)
    .then(function (response) {
      if (response.data.status) {
        success = true;
        resultdata = response.data.data;
        pagination = response.data.pagination;
      } else {
        success = false;
      }
    })
    .catch(async function (error) {
      // console.log(error.status);
      if (error.status == 401) {
        return sendRedirect(event, "/login");
      }
      throw createError({
        statusCode: error.status,
        statusMessage: error.message,
      });
    });
  if (success) {
    return {
      success: success,
      list_menu: resultdata,
      pagination: pagination,
    };
  } else {
    return {
      success: success,
      message: "Gagal mengambil data",
    };
  }
});
