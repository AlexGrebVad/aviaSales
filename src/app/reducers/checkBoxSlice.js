import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	checkBoxStatus: {
		all: true,
		withoutTransfer: true,
		oneTransfer: true,
		twoTransfer: true,
		threeTransfer: true,
	},
}

const chekAllLogick = (stateForCheck) => {
	if (
		stateForCheck.checkBoxStatus.withoutTransfer &&
		stateForCheck.checkBoxStatus.oneTransfer &&
		stateForCheck.checkBoxStatus.twoTransfer &&
		stateForCheck.checkBoxStatus.threeTransfer
	) {
		return 1
	}
	return 0
}

const checkBoxSlice = createSlice({
	name: 'checkBox',
	initialState,
	reducers: {
		setCheckBoxAll(state) {
			state.checkBoxStatus.all = !state.checkBoxStatus.all

			if (state.checkBoxStatus.all) {
				Object.keys(state.checkBoxStatus).forEach((key) => {
					state.checkBoxStatus[key] = state.checkBoxStatus.all
				})
			} else {
				Object.keys(state.checkBoxStatus).forEach((key) => {
					state.checkBoxStatus[key] = state.checkBoxStatus.all
				})
			}
		},
		setCheckBoxWithoutTransfer(state) {
			state.checkBoxStatus.withoutTransfer =
				!state.checkBoxStatus.withoutTransfer

			if (chekAllLogick(state)) {
				state.checkBoxStatus.all = true
			} else {
				state.checkBoxStatus.all = false
			}
		},

		setCheckBoxOneTransfer(state) {
			state.checkBoxStatus.oneTransfer = !state.checkBoxStatus.oneTransfer

			if (chekAllLogick(state)) {
				state.checkBoxStatus.all = true
			} else {
				state.checkBoxStatus.all = false
			}
		},
		setCheckBoxTwoTransfer(state) {
			state.checkBoxStatus.twoTransfer = !state.checkBoxStatus.twoTransfer

			if (chekAllLogick(state)) {
				state.checkBoxStatus.all = true
			} else {
				state.checkBoxStatus.all = false
			}
		},
		setCheckBoxThreeTransfer(state) {
			state.checkBoxStatus.threeTransfer = !state.checkBoxStatus.threeTransfer

			if (chekAllLogick(state)) {
				state.checkBoxStatus.all = true
			} else {
				state.checkBoxStatus.all = false
			}
		},
	},
})

export const {
	setCheckBoxAll,
	setCheckBoxWithoutTransfer,
	setCheckBoxOneTransfer,
	setCheckBoxTwoTransfer,
	setCheckBoxThreeTransfer,
} = checkBoxSlice.actions

export default checkBoxSlice.reducer
