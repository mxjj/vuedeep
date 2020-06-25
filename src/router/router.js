import Vue from "vue";
import VueRouter from "vue-router";
import index from './index'

Vue.use(VueRouter);
const createRouter = () => new VueRouter({
    mode: "history",
    routes: [
        // 结构对象
        ...index
    ],
});

const router = createRouter();

// router.beforeEach((to, from, next) => {
//     console.log(to, from, next);
// });
export default router;
