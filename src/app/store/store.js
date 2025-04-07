import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { thunk } from 'redux-thunk'
import checkBoxReducer from '../reducers/checkBoxSlice'
import ticketLoadErrReducer from '../reducers/ticketLoadErrSlice'
import tabStatusReducer from '../reducers/tabSlice'

const rootReducer = {
	checkBox: checkBoxReducer,
	ticketLoadErr: ticketLoadErrReducer,
	tab: tabStatusReducer,
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	devTools: process.env.NODE_ENV !== 'production',
})

export const useAppDispatch = () => useDispatch()
