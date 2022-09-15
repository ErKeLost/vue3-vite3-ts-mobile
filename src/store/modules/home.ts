import { getHomeHotList, getHomeCategoriesList } from '@/services/modules/home'

const useHomeStore = defineStore('home-store', () => {
  const hotSuggest = ref([])
  const categories = ref([])

  async function getHotSuggestList() {
    const res = await getHomeHotList()
    hotSuggest.value = res.data
  }
  async function getCategoriesList() {
    const res = await getHomeCategoriesList()
    categories.value = res.data
  }

  return {
    hotSuggest,
    categories,
    getHotSuggestList,
    getCategoriesList
  }
})

export { useHomeStore }
