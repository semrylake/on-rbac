import { defineEventHandler, readBody } from "h3";
import { parseSession } from "../middleware";
import { useSessionCaptcha } from "../utils/session";
interface Captcha {
  captcha: string;
}
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Captcha>(event);
    // Ambil data CAPTCHA dari session
    if (body.captcha.length == 0) {
      return { valid: false, message: "CAPTCHA harus diisi" };
    }
    const datasession = await useSessionCaptcha(event);
    // Jika tidak ada CAPTCHA atau sudah kadaluwarsa
    if (body.captcha != datasession.data.name) {
      return { valid: false, message: "CAPTCHA tidak ditemukan." };
    }

    // Periksa apakah CAPTCHA sudah kedaluwarsa
    const currentTime = Date.now();
    if (datasession.data.expiry < currentTime) {
      return {
        valid: false,
        message: "CAPTCHA sudah kedaluwarsa. Silakan coba lagi.",
      };
    }
    // CAPTCHA benar
    return { valid: true };
  } catch (error) {
    console.log(error);
  }

  //   // Verifikasi CAPTCHA input dengan CAPTCHA yang disimpan
  //   const isValid = sessionCaptcha.text.toLowerCase() === captchaInput.toLowerCase();

  //   if (isValid) {
  //     // CAPTCHA benar
  //     return { valid: true, message: 'CAPTCHA valid!' };
  //   } else {
  //     // CAPTCHA salah
  //   return { valid: false, message: "CAPTCHA tidak valid." };
  //   }
});
