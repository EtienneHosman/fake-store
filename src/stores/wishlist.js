import {defineStore} from "pinia";
import {computed, ref} from "vue";
import { WISHLIST_STORAGE } from '@/composables/usePersistWishlist'

export const useWishlistStore = defineStore('wishlist', () => {
    const list = ref(JSON.parse(localStorage.getItem(WISHLIST_STORAGE)) ?? []);
    const listLength = computed(() => {
        return list.value.length
    })
    function removeFromList(id){
        console.log(id)
        list.value = list.value.filter((item) => item.id !== id)
    }
    function addToList(product) {
        list.value.push(product)
    }

    return { list, listLength, removeFromList, addToList}
})