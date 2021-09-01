import axios from '@/utils/axios'

export function getCat() {
  return axios.get('https://thatcopy.pw/catapi/rest/')
}
