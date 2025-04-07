import { createSlice } from '@reduxjs/toolkit'

const ticketSlice = createSlice({
	name: 'ticket',
	initialState: {
		ticketArr: [],
		loading: true,
		err: false,
		ticketLoadProgress: 0,
	},
	reducers: {
		addTickets: (state, action) => {
			state.ticketArr = [...state.ticketArr, ...action.payload]
			if (state.ticketArr.length > 0) state.loading = false
		},
		incrementTicketLoadStatus: (state) => {
			state.ticketLoadProgress += 4
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('ticket/fetchTicket/pending', (state) => {
				state.loading = true
			})
			.addCase('ticket/fetchTicket/fulfilled', (state) => {
				state.loading = false
				state.ticketLoadProgress = 100
			})
			.addCase('ticket/fetchTicket/rejected', (state) => {
				state.loading = false
				state.err = true
			})
	},
})

export const { addTickets, incrementTicketLoadStatus } = ticketSlice.actions
export default ticketSlice.reducer
