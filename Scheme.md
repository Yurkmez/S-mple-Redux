# Как работает Redux

npm install @reduxjs/toolkit react-redux

## 1. `index.js`

### import { Provider } from 'react-redux';

_импорт провайдера_

### import store from './store';

_импорт магазина редюсеров_

(код)******************\_******************

```
<Provider store={store}>
        <App />
    </Provider>
```

(код)******************\_******************

## 2. `app.js`

### import { Counter } from './Counter';

_основной компонент для отображения результатов работы_

(код)******************\_******************

```
function App() {
    return (
        <div className="App">
            <Counter />
            ...
        <div>
    )}
```

(код)******************\_******************

## 3. `counterSlice.js`

_создание редюсера_

### import { createSlice } from '@reduxjs/toolkit';

(код)****************\_****************

```
const counterSlice = createSlice({
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
```

(код)****************\_****************

_Что экспортируется._

### (1) export const { increment, decrement, incrementByAmount } = counterSlice.actions;

_экспорт в ***<u>Counter</u>***_

### (2) export default counterSlice.reducer;

_экспорт в ***<u>store.js</u>***_

### (3) export const selectCount = (state) => state.counter.value;

_экспорт в ***<u>Counter</u>***_  
_(1) - ф-ции, (2) - редюсер, (3) - состояние_

## 3. `store.js`

_магазин (редюсеров)_

### import { configureStore } from '@reduxjs/toolkit';

### import counterReducer from './counterSlice';

_импортируется редюсер от их создателя и кладется на полку, дается название - "counter"_

```
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
```

_экспорт в ***<u>index.js</u>***, в качестве свойства ***<u>Provider</u>***_

## 4.`Counter.js`

_как он все это переваривает_  
_импорты:_  
(код)**************\_**************

```
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';
```

(код)**************\_**************  
_<u>decrement, increment, incrementByAmount, incrementAsync</u> - это все ф-ции - действия_  
_<u>useSelector, useDispatch</u> - для получения и передачи состояния в редюсер_  
_<u>selectCount</u> - собственно состояние_

_подписываемся на состояние (count = useSelector) и
определяем переменную (dispatch = useDispatch) для отправки action в редюсер_

### const count = useSelector(selectCount);

### const dispatch = useDispatch();

_реализация действия_

```
<button onClick={() => dispatch(increment())}>+</button>
```
