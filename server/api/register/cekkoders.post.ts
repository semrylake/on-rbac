import { useMyGlobalFunction } from "~/composables/generate_sugnature";
import axios from "axios";
interface DataRefFaskes {
  keyword: string;
  offset: string;
}
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<DataRefFaskes>(event);
    const useragent = event.node.req.headers["user-agent"];
    const params = {
      path: "/fasyankes/ref-fasyankes",
      method: "POST",
      device_id: useragent,
    };
    const signature = await useMyGlobalFunction(params);
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:2527/fasyankes/ref-fasyankes",
      headers: {
        "KTKI-Signature": signature.signature,
        "Device-ID": useragent,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        keyword: body.keyword,
        offset: "0",
      },
    };
    let success = false;
    let resultdata = null;
    await axios
      .request(config)
      .then((response) => {
        success = true;
        resultdata = response.data.list;
      })
      .catch((error) => {
        console.log(error);
      });

    return {
      success: success,
      faskes: resultdata,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});
