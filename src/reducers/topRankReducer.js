const initialTopRankValue = []

const topRankReducer = (state = initialTopRankValue, action) => {
    switch(action.type){
        case "ADD_TOPRANK" : {
            return [...action.payload]
        }
        case "INC_RANK" : {
            // console.log("INC_RANK",action.payload);
            return state.map(ele => {
                if(ele.id == action.payload){
                    return {...ele, Rank : ele.Rank = ele.Rank + 10}
                } else {
                    return {...ele}
                }
            })
        }
        case "DEC_RANK" : {
            return state.map(ele => {
                if(ele.id == action.payload){
                    return {...ele, Rank : ele.Rank = ele.Rank - 10}
                } else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
} 

export default topRankReducer