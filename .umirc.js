
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      // component: '../pages/index',

      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            { path: '/user/login', component: '../pages/user/Login'},
          ]
        },
        {
          path: '/',
          component: '../layouts/index',
          routes: [
            { path: '/', component: '../pages/index' },
          ]
        }

      ]
    },
    // {path:'/user/login',
    //   component:'../pages/user/login'
    // }
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     { path: '/user/login', component: '../pages/user/Login.js' },
    //     // {path:'user/login',component:'../pages/user/login'}
    //   ]
    // },
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     { path: '/user', redirect: '/user/login' },
    //     { path: '/user/login', component: '../pages/user/Login.js' },
    //     { path: '/user/register',  component: '../pages/user/register.js'},
    //   ],
    // },
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'news',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
