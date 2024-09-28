export default defineEventHandler(() => {
     try {
          return {
               result: 'works'
          };
          
     } catch (error) {
          throw createError({
               statusCode: 500,
               statusMessage: "Something went wrong"
          });
     }
});