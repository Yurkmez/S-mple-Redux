import { createSlice } from '@reduxjs/toolkit';

const counterSlise = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const selectCount = (state) => state.counter.value;

export const { increment, decrement, incrementByAmount } = counterSlise.actions;
export default counterSlise.reducer;
