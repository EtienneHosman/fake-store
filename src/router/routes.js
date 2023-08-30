import Home from "@/views/Home.vue";
import ProductView from "@/views/ProductView.vue";

export const routes = [
    {path: '/', name: "Home", component: Home},
    {path: '/product/:id', name:"ProductView", component: ProductView, props: true}
]