import Axios from 'axios'

const axios = Axios.create({
    baseURL:'//raw.githubusercontent.com/syook/react-dishpoll/main'
})

export default axios