import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tabStatus: {
		theCheapest: false,
		theFastest: false,
		optima: false,
	},
}

const tabStatus = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		toggleCheapestTab(state) {
			state.tabStatus.theFastest = false
			state.tabStatus.optima = false
			state.tabStatus.theCheapest = state.tabStatus.theCheapest || true
		},

		toggleFastestTab(state) {
			state.tabStatus.theCheapest = false
			state.tabStatus.optima = false
			state.tabStatus.theFastest = state.tabStatus.theFastest || true
		},

		toggleOptimaTab(state) {
			state.tabStatus.theFastest = false
			state.tabStatus.theCheapest = false
			state.tabStatus.optima = state.tabStatus.optima || true
		},
	},
})

export const { toggleCheapestTab, toggleFastestTab, toggleOptimaTab } =
	tabStatus.actions

export default tabStatus.reducer
