import { request } from '@/services'

// city info
export function getCityInfo() {
  return request.get({
    url: '/city/all'
  })
}
