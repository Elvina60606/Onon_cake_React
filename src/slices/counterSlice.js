import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'count',
    initialState : {
        count: 0
    },
    reducers: {
        incrementCount: (state ,action ) => {
            if( state.count <10 ){
                state.count += 1
            }

            console.log(state.count, action)
        },
        decrementCount: (state, action ) => {
            if( state.count >0 ){
                state.count -= 1
            }

             console.log(action)
        },
    }
})

export const { incrementCount, decrementCount } =  counterSlice.actions;

export default counterSlice.reducer;
