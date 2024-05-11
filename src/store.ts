import { atom, onMount } from 'nanostores'

function saveToLocalStorage(key: string, value: Set<string>) {
    localStorage.setItem(key, JSON.stringify([...value]))
}

function loadFromLocalStorage(key: string): Set<string> {
    const item = localStorage.getItem(key)
    return new Set(item ? JSON.parse(item) : [])
}

export const completedPosts = atom<Set<string>>(loadFromLocalStorage('completedPosts'))

onMount(completedPosts, () => {
    const unsubscribe = completedPosts.subscribe(currentValue => {
        saveToLocalStorage('completedPosts', currentValue)
    })
    return unsubscribe
})
