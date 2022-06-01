import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRanks } from '../actions/topRankAction';

function PollContainer(props) {

    const topRank = useSelector(state => {
        return state.topRank
    })

    const topDish = topRank.sort((a,b) => {
        return b.Rank - a.Rank
    })

    const topThreeDish = topDish.slice(0,3)


    return (
        <div>
            <div class="card mt-5">
                <div class="card-header">
                    Top Ranked Dishes
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    {topThreeDish?.map((ele,i) => {
                        return <h1> Rank - {i+1} - {ele.dishName} </h1>
                    })}       
                    <footer class="blockquote-footer mt-2"> Hmm, yummy! </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default PollContainer