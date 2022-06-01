const initialDishValue = []

const dishReducer = (state = initialDishValue, action) => {
    switch(action.type){
        case "ADD_DISH" : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default dishReducer