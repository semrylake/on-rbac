import { useMyGlobalFunction } from "~/composables/generate_sugnature";
import axios from "axios";
// interface DataRefFaskes {
//   keyword: string;
//   offset: string;
// }
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const useragent = event.node.req.headers["user-agent"];
    const params = {
      path: "/fasyankes/get-fasyankes",
      method: "POST",
      device_id: useragent,
    };
    //   buat signature
    const signature = await useMyGlobalFunction(params);
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:2527/fasyankes/get-fasyankes",
      headers: {
        "KTKI-Signature": signature.signature,
        "Device-ID": useragent,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        kode: body.keyword,
      },
    };
    let success = false;
    let resultdata = null;

    await axios
      .request(config)
      .then((response) => {
        success = true;
        resultdata = response.data.data;
      })
      .catch((error) => {
        throw createError({
          statusCode: 500,
          statusMessage: "Something went wrong when get request",
        });
      });
    return {
      success: success,
      faskes_detail: resultdata,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});
