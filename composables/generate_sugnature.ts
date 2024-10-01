// composables/useMyGlobalFunction.js
import * as crypto from "crypto";
export const useMyGlobalFunction = (params) => {
//   console.log(params);
  const payload = `path=${params.path}&method=${params.method}&deviceid=${params.device_id}`;
  const secret = "ktki-estr";

  const sig = crypto.createHmac("sha256", secret);
  sig.update(payload);
  const encodesignature = sig.digest("base64");

  // return encodesignature;

  return { signature: encodesignature };
};
