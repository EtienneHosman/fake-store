import Home from "@/views/Home.vue";
import ProductView from "@/views/ProductView.vue";
import WishlistView from "@/views/WishlistView.vue";

export const routes = [
    {path: '/', name: "Home", component: Home},
    {path: '/product/:id', name:"ProductView", component: ProductView, props: ({params}) => ({id: Number.parseInt(params.id)})},
    {path: '/wishlist', name:"WishlistView", component: WishlistView}
]