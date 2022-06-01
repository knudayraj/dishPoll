import React from 'react'

function DishList(props) {
    const { id, dishName, description, image , Rank, votedDishList } = props
    // console.log(props);

    const handleVoted = (id) => {
        votedDishList(id)
    }

    return (
        <div class="card mt-2 mb-3" style={{width: "18rem", border : "1px solid", padding : "5px", margin : "50px", borderRadius : "5px"}}>
            <img src={image} class="card-img-top" width='200px' height="200px" style={{borderRadius : "10px"}}/>
            <div class="card-body">
                <h5 class="card-title">{dishName}</h5>
                <p class="card-text">{description}</p>
                <button className='btn-primary' style={{borderRadius : "5px"}} onClick={() => {
                    handleVoted(id)
                }}> Save for Vote </button>
            </div>
        </div>

        // <div>
        //     <h2> {dishName} </h2>
        //     <img src={image} />
        //     <h4> {description} </h4>
            // <button onClick={() => {
            //     handleVoted(id)
            // }}> Save for Vote </button>
        //     <hr />
        // </div>
    );
}

export default DishList