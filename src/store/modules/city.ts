import { getCityInfo } from '@/services'

export const useCityStore = defineStore('city', () => {
  const allCities = ref({})
  async function fetchAllCitiesData() {
    const res = await getCityInfo()
    allCities.value = res.data
  }
  return {
    allCities,
    fetchAllCitiesData
  }
})
