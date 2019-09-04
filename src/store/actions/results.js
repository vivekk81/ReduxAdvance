import * as actionTypes from './actionTypes'


// export const storeResult = (value) => {
//     return {
//         type: STORE_RESULT,
//         value: value
//     }
// }

export const saveResult = value => {
    return {
        type: actionTypes.STORE_RESULT,
        result: value
    }
}

export const storeResult = (value) => {
    return (dispatch, getState )=> {
        setTimeout( ()=> {
            // const oldCounter = getState().ctr.counter
            // console.log(oldCounter)
            dispatch(saveResult(value))
        }, 2000)
    }
}

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: value
    }
}