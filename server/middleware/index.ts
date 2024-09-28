import { H3Event } from 'h3';
import { sessionAuthConfig } from '../utils/session';
export const parseSession = async (event: H3Event) => {
     try {
          const coockie = getCookie(event, sessionAuthConfig.name as string);
          const result = await unsealSession(event, sessionAuthConfig, coockie || '');
          return result;
     } catch (error) {
          // console.log(error);
          return null;
     }
};
export default defineEventHandler(async(event) => {
     event.context.auth = await parseSession(event);
})