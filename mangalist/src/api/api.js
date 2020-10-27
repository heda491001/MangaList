import store from '@/store'
import axios from 'axios'

export default {
    instance () {
      var api = axios.create({
        withCredentials: true,
        headers: {
          'Accept-Language': 'ja',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        timeout: 60000
      })
    }
}
