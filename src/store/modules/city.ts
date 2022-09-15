import { getCityInfo } from '@/services'

export const useCityStore = defineStore('city', () => {
  const allCities = ref({})
  const currentCity = ref({})
  async function fetchAllCitiesData() {
    const res = await getCityInfo()
    allCities.value = res.data
  }
  return {
    currentCity,
    allCities,
    fetchAllCitiesData
  }
})
