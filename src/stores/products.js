import {defineStore} from "pinia";
import {ref} from "vue";

export const useProductsStore = defineStore('products', () => {
    const products = ref(new Map())
    const selectedProduct = ref(null)

    function fetchProducts() {
        return fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                products.value = new Map(json.map(el => [el.id, el]))
            })
            .catch(err => console.log(err))
    }
    function setSelectedProduct(product){
        selectedProduct.value = product
    }
    function fetchProductById(id){
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                selectedProduct.value = json;
            })
    }
    return { products, selectedProduct, fetchProducts, setSelectedProduct, fetchProductById}
})