import HomePage from "@/pages/HomePage.vue";
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
                component: HomePage
            }
        ]
    },
];