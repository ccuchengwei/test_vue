import Home from "@/pages/Home.vue";

const routes = [
    {
        path: "/",
        component: Home,
        redirect: "/home",
        children:[
            {
                path: "home",
                name: "Home",
                component: Home
            }
        ]
    }
];

export default routes;