export const addTopRanks = (topRank) => {
    return {
        type : "ADD_TOPRANK",
        payload : topRank
    }
}

export const incrementRankAction = (id) => {
    // console.log('incrementRankAction',id);
    return {
        type : "INC_RANK",
        payload : id
    }
}

export const decrementRankAction = (id) => {
    // console.log('incrementRankAction',id);
    return {
        type : "DEC_RANK",
        payload : id
    }
}