import AdminJSExpress from "@adminjs/express";

const buildAdminRouter = (admin) => {
  const router = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
      if (email === "admin@mended.love" && password === "admin") {
        return {
          email: "admin@mended.love",
          password: "admin",
        };
      }
      return false;
    },
    cookiePassword: "some-secret-password-used-to-secure-cookie",
  });
  return router;
};
export default buildAdminRouter;
