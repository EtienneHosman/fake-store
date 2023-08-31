import { onUnmounted } from 'vue'
import { useWishlistStore } from '@/stores/wishlist'

export const WISHLIST_STORAGE = 'WISHLIST_STORAGE'

export function usePersistWishlist() {
    const store = useWishlistStore()

    const unsub = store.$subscribe(() => {
        localStorage.setItem(WISHLIST_STORAGE, JSON.stringify(Array.from(store.list.entries())))
    })

    onUnmounted(() => {
        unsub()
    })
}