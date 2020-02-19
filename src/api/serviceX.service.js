const BASE_URL = ''
const BASE_HEADERS = {
  
}

export const fetchData = () => {
  return fetch(`${BASE_URL}/data`, { method: 'get', headers: {...BASE_HEADERS} })
}
