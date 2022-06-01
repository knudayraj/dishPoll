import React, { useEffect, useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import axios from 'axios';
import { useDispatch, useStore } from 'react-redux'
import { addDishes } from './actions/dishAction';
import { addTopRanks } from './actions/topRankAction';

const App = () => {
  const [userLoggin, setUserLoggin] = useState(false)
  const [username, setUsername] = useState('')
  const [dishData, setDishData] = useState('')
  const [topRank, setTopRank] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
      axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
          .then(response => {
              // console.log(response.data)
              const dishes = response.data
              const result = dishes.map(ele => ({ ...ele, Rank: 0 }))
              setDishData(result)
              // dispatch(addDishes(result))
          })
          .catch(err => {
              console.log(err)
          })
  },[userLoggin])

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
        .then(response => {
            // console.log('response.data',response.data)
            const data = response.data
            const result = data.map(ele => ({ ...ele, Rank: 0 }))
            if(topRank.length <= 0){
              setTopRank(result)
            }
            
        })
        .catch(err => {
            console.log(err)
        })
  })


  dispatch(addDishes(dishData))
  const data = localStorage.getItem(('topRank'))
  const topRakedDishes = JSON.parse(data)
  console.log('topRakedDishes', topRakedDishes)
  if(data){
    dispatch(addTopRanks(topRakedDishes))
  } else {
    dispatch(addTopRanks(topRank))
  }


  const handleLoggedin = () => {
    setUserLoggin(!userLoggin)
  }

  useEffect(() => {
    if(localStorage.getItem('login')){
      setUserLoggin(!userLoggin)
    }
  },[])

  useEffect(() =>{
    const name = localStorage.getItem('login')
    setUsername(name?.toUpperCase())
},[])

  // console.log('username', username)

  return (
    <div className='container'>
        {/* <h1> { userLoggin ? 'Welcome to Dishpoll Contest '  : 'Dishpoll Contest' } </h1> */}
        <NavBar dishData={dishData} userLoggin={userLoggin} handleLoggedin={handleLoggedin} />
    </div>
  )
}

export default App