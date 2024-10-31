import { defineEventHandler } from "h3";
import svgCaptcha from "svg-captcha";
import { useSessionCaptcha } from "@/server/utils/session";
export default defineEventHandler(async (event) => {
  //buat captcha
  const notusedchar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  try {
    const captcha = svgCaptcha.create({
      size: 4, //panjang teks
      ignoreChars: "0o1il"+notusedchar, // Hilangkan karakter yang membingungkan
      noise: 3, // Jumlah noise lines
      color: true, // Warna teks
      width: 200,
      mathMin: 1, // Nilai minimum untuk soal matematika
      mathMax: 9, // Nilai maksimum untuk soal matematika
    });
    const expiryTime = Date.now() + 2 * 60 * 1000; // 2 menit dari sekarang
    // Simpan teks CAPTCHA di session atau cache untuk validasi (misalnya Redis atau session)
    const session = await useSessionCaptcha(event);
    await session.update({
      name: captcha.text,
      expiry: expiryTime,
    });
    // Kembalikan data SVG
    return { svg: captcha.data };
  } catch (error) {
    console.log(error);
  }
});
