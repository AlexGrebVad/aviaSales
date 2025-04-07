import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	addTickets,
	incrementTicketLoadStatus,
} from '../app/reducers/ticketLoadErrSlice'

export const fetchTickets = createAsyncThunk(
	'ticket/fetchTicket',
	async (key, { dispatch, rejectWithValue }) => {
		try {
			const aviasalesTicketUrl = `https://aviasales-test-api.kata.academy/tickets?searchId=${key}`
			let allTicket = []
			let stop = false

			while (!stop) {
				try {
					const response = await fetch(aviasalesTicketUrl)

					if (!response.ok) {
						const error = new Error(`HTTP error! Status: ${response.status}`)
						error.status = response.status
						throw error
					}

					const data = await response.json()
					stop = data.stop

					if (data.tickets) {
						allTicket = [...allTicket, ...data.tickets]
						dispatch(addTickets(data.tickets))
						dispatch(incrementTicketLoadStatus())
					}
				} catch (error) {
					if (error.status !== 500) throw new Error(error.status)
				}
			}
			return allTicket
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
)

export default fetchTickets
