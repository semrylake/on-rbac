import { useSessionAuth  } from "@/server/utils/session";
interface Login{
     email: string;
     password: string;
}
export default defineEventHandler(async (event) => {
     try {
          const body = await readBody<Login>(event);
          if (body.email !== 'jufentosemry@gmail.com' && body.password !== '123456') {
               throw createError({
                    statusCode: 400,
                    statusMessage: "Email tidak terdaftar"
               });
          }
          const session = await useSessionAuth(event);
          await session.update({
               name: 'Semry',
               email: 'jufentosemry@gmail.com',
          })
          return {
               success: true
          };
          
     } catch (error) {
          console.log(error)
          throw createError({
               statusCode: 500,
               statusMessage: "Something went wrong"
          });
     }
});