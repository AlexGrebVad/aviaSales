const ticketService = {
	async getSearchId() {
		const aviasalesKeyURL = `https://aviasales-test-api.kata.academy/search`
		try {
			const responce = await fetch(aviasalesKeyURL)

			if (!responce.ok) {
				const errorData = await responce.json().catch(() => null)
				throw new Error(
					errorData?.message || `HTTP error! status: ${responce.status}`,
				)
			}

			return responce.json()
		} catch (error) {
			console.error('API Error:', error.message)
			throw error
		}
	},
}

export default ticketService
