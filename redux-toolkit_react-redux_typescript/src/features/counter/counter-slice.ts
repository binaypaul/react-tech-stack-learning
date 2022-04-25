import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

//initial state
const initialState: CounterState = {
    value: 0
}

//create slice. defining reducer functions
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        incremented(state) {
            //its ok to increment the state object value with '++' or mutatively becuase immer library used in createSlice tracks the changes to state and makes it immutable, all under the hood.
            state.value++;
        },
        //decrement
        decremented(state) {
            state.value--;
        },
        //updated amount
        updatedAmount(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
});

export const { incremented, decremented, updatedAmount } = counterSlice.actions;
export default counterSlice.reducer;