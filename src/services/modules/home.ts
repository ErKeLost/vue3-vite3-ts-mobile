import { request } from '@/services'

export function getHomeHotList() {
  return request.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategoriesList() {
  return request.get({
    url: '/home/categories'
  })
}

export function getHomeHouseList(page: number) {
  return request.get({
    url: '/home/houselist',
    params: {
      page
    }
  })
}
