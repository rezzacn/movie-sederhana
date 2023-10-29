import axios from "axios"

const apiKey = '2c5d2f5dce6dbb9002ebc9d12ceb909c'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'
const apiAxios = axios.create({
    baseURL : baseUrl,
    params:{
        api_key: apiKey,
    }
})
export default apiAxios