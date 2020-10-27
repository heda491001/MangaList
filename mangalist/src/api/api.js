// import store from '@/store'
import axios from 'axios'

export default {
    instance () {
      var api = axios.create({
        withCredentials: true,
        headers: {
          'Accept-Language': 'ja',
          'Accept': 'application/json',
        //   "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Headers" : "application/json",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        timeout: 60000
      })
      return api
    }
}
