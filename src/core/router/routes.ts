export const AppRoutes = {
  SIGN_UP: "/signup",
  LOGIN: "/login",
  RECOVER_PASSWORD: "/recover-password",
  HOME: "/",
  CREATE_WISH: "/create-wish",
  WISH: (id: string) => `/wish/${id}`,
  WISH_ABSOLUTE: "/wish/:wishId",
};
