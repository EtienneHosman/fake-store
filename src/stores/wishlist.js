import {defineStore} from "pinia";
import {computed, ref} from "vue";
import { WISHLIST_STORAGE } from '@/composables/usePersistWishlist'

export const useWishlistStore = defineStore('wishlist', () => {
    const list = ref(new Map(JSON.parse(localStorage.getItem(WISHLIST_STORAGE))) ?? new Map());
    const listLength = computed(() => {
        return list.value.size
    })
    function removeFromList(id){
        list.value.delete(id)
    }
    function addToList(product) {
        list.value.set(product.id, product)
    }
    function isInList(id){
        return Boolean(list.value.get(id))
    }
    function toggleWishlistItem(product){
        if (isInList(product.id)) {
            removeFromList(product.id)
        } else {
            addToList(product)
        }
    }

    return { list, listLength, removeFromList, addToList, isInList, toggleWishlistItem}
})