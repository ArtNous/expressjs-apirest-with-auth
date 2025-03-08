declare module 'express-session' {
  interface SessionData {
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
    };
    admin: boolean;
  }
}
export {}