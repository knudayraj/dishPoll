import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementRankAction, incrementRankAction } from '../actions/topRankAction';

function VotedDish(props) {
    const { voted, handleRemove, incrementRank, decrementRank } = props

    const dispatch = useDispatch()

    // console.log(voted)
    const dish = useSelector(state => {
        return state.dish
    }) 

    const removeItem = (id) => {
        handleRemove(id)
        // console.log(id);
    }

    // incrementRank, decrementRank

    const handleIncrement = (id) => {
        incrementRank(id)
        dispatch(incrementRankAction(id))
    }

    const handleDecrement = (id) => {
        decrementRank(id)
        dispatch(decrementRankAction(id))
    }

    return (
        <div>
            <h1> Voted Dishes </h1>
            { voted?.length == 0 ? (<>
                <hr />
                <h3> No Dishes added </h3>
                <h5>Please add your first Dish to Vote </h5> 
                <hr />
            </>) : (<>
                { voted?.map(ele => {
                return dish?.map(e => {
                    if(e.id == ele){
                        return (
                        <>
                            <h3> {e.dishName} </h3>
                            <button
                                style={{borderRadius : "5px"}}
                                className='btn-secondary'
                                disabled={e.Rank <= 0}
                                onClick={() => 
                                {handleDecrement(ele)}
                            }> <b> - </b> </button>
                                 <b> {e.Rank} </b> 
                            <button 
                                style={{borderRadius : "5px"}}
                                className='btn-secondary'
                                disabled={e.Rank >= 30}
                                onClick={() => 
                                {handleIncrement(ele)}
                            }> <b> + </b> </button>
                            <button 
                                style={{borderRadius : "5px"}}
                                className=' ms-2 btn-danger'
                                onClick={() => 
                                {removeItem(ele)}
                            }> <b> Remove </b> </button>
                        </>
                        )
                    }
                })
            }) }
            </>)}
        </div>
    );
}

export default VotedDish