/**
 * 路由
 *
 */

const index = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home"),
    },
];


export default index
