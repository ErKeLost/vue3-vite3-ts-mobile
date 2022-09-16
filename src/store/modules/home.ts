import {
  getHomeHotList,
  getHomeCategoriesList,
  getHomeHouseList
} from '@/services/modules/home'

const useHomeStore = defineStore('home-store', () => {
  const hotSuggest = ref([])
  const categories = ref([])

  // list
  const currentPage = ref(1)
  const houseList = ref([])
  async function getHotSuggestList() {
    const res = await getHomeHotList()
    hotSuggest.value = res.data
  }
  async function getCategoriesList() {
    const res = await getHomeCategoriesList()
    categories.value = res.data
  }
  async function getHouseList() {
    const res = await getHomeHouseList(currentPage.value)
    houseList.value.push(...res.data)
  }
  return {
    hotSuggest,
    categories,
    houseList,
    getHotSuggestList,
    getCategoriesList,
    getHouseList
  }
})

export { useHomeStore }
