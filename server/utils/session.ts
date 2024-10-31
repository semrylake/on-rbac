import { type H3Event, type SessionConfig } from 'h3';
type AuthValue = {
     // name: string;
     email: string;
     token: string;
}
type CaptchaValue = {
     name: string;
     expiry: number;
}
export const sessionAuthConfig: SessionConfig = {
     name: 'auth',
     password: 'semrydev-rbac-2024_app@rbac_admin',
     cookie: {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 1 //2 jam
     }
}
export const sessionCaptchaConfig: SessionConfig = {
     name: 'captcha',
     password: 'semrydev-ktki-2024_app@fasyankes',
     cookie: {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 2 //2 menit
     }
}
export const useSessionAuth = async (event: H3Event) => {
     const session = useSession<AuthValue>(event, sessionAuthConfig);
     return session;
}
export const useSessionCaptcha = async (event: H3Event) => {
     const session = useSession<CaptchaValue>(event, sessionCaptchaConfig);
     return session;
}