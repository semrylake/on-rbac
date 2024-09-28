import { type H3Event, type SessionConfig } from 'h3';
type AuthValue = {
     name: string;
     email: string;
}
export const sessionAuthConfig: SessionConfig = {
     name: 'auth',
     password: 'semrydev-ktki-2024_app@fasyankes',
     cookie: {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 2 //2 jam
     }
}
export const useSessionAuth = async (event: H3Event) => {
     const session = useSession<AuthValue>(event, sessionAuthConfig);
     return session;
}