export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    {
      path: "/login",
      component: "./login"
    },
    {
      path: "/",
      component: "../layouts",
      routes: [
        // 以pages为根目录
        // { path: "/", component: "./index" },
        {
          path: "/",
          component: "./goods/index"
        },
        {
          path: "/about",
          component: "./about",
          // 这里相对根目录，文件名后缀不能少
          Routes: ["./routes/PrivateRoute.js"]
        },
        {
          path: "/users",
          component: "./users/_layout",
          routes: [
            {
              path: "/users/",
              component: "./users/index"
            },
            {
              path: "/users/:id",
              component: "./users/$id"
            }
          ]
        },
        {
          component: "./404"
        }
      ]
    }
  ]
};
