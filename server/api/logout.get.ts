import { useSessionAuth } from "@/server/utils/session";
export default defineEventHandler(async(event) => {
     try {
          const session = await useSessionAuth(event);
          await session.clear();
          return {
               success: true
          };
          
     } catch (error) {
          throw createError({
               statusCode: 500,
               statusMessage: "Something went wrong"
          });
     }
});