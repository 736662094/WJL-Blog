const routers = [
    // {
//     path: '/',
//     meta: {
//         title: ''
//     },
//     component: (resolve) => require(['./views/index.vue'], resolve)
// },
    {
    path: '/',
    name:'Home',
    meta: {
        title: '主页'
    },
    component: (resolve) => require(['./views/home/index.vue'], resolve)
}, {
    path: '/login',
    name:'Login',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['./views/login/index.vue'], resolve)
}];
export default routers;