import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      `Client-ID d94ed5ad7975ca4ae3e69e6722b825e1f8f506a06f0aed04fce35a89355077d8`
  }
})