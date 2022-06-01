import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DishList from './DishList';
import VotedDish from './VotedDish';

function DishContainer(props) {
    // const { dishData } = props
    const [voted, setVoted] = useState([])
    const [dishData, setDishData] = useState('')

    const dish = useSelector(state => {
        return state.dish
    }) 

    useEffect(() => {
        setDishData(dish)
    },[])


    const votedDishList = (id) => {
        // console.log(id);
        if(voted.includes(id) || voted.length >= 3 ){
            alert('Item already added/ only 3 is allowed')
        } else {
            setVoted([...voted, id])
        }
    }

    const handleRemove = (id) => {
        // console.log(id);
        const result = voted.filter(ele => {
            return ele != id
        })
        setVoted(result)
    }

    const incrementRank = (id) => {
        console.log(id)
        const result = dish.map(ele => {
            if(ele.id == id){
                return {...ele, Rank : ele.Rank = ele.Rank + 10}
            } else {
                return {...ele}
            }
        })
        setDishData(result)
    }

    const decrementRank = (id) => {
        console.log(id)
        const result = dish.map(ele => {
            if(ele.id == id){
                return {...ele, Rank : ele.Rank = ele.Rank - 10}
            } else {
                return {...ele}
            }
        })
        setDishData(result)
    }

    // console.log('voted', voted)
    const handleSave = () => {
        alert('Sucessfully Saved')
        props.history.push('/pollResult')
    }


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                { dish?.map(ele => {
                    return <DishList key={ele.id} {...ele} votedDishList={votedDishList} />
                }) }
                </div>
                <div className='col border'>
                <VotedDish 
                    incrementRank={incrementRank} 
                    decrementRank={decrementRank} 
                    handleRemove={handleRemove} 
                    voted={voted} 
                />
                <p> <b>Note : Once you submit for Poll, you can't edit the selection again </b></p>
                <button className='btn btn-success' onClick={handleSave}> <b> Submit </b> </button>
                </div>
            </div>  
        </div>
    );
}

export default DishContainer