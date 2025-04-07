import React from 'react'
import { Provider } from 'react-redux'
import TicketTransferFilter from '../TicketTransferFilter/TicketTransferFilter'
import TicketOptionsTab from '../TicketOptionsTab/TicketOptionsTab'
import LoadingTicketsError from '../loadingError/loadingTicketsError'
import styles from './App.module.scss'
import { store } from '../../store/store'

function App() {
	return (
		<Provider store={store}>
			<section className={styles['main-wrapper']}>
				<div className={styles['logo-wrapper']}>
					<img className="img" src="/imgs/Logo.svg" alt="Company Logo" />
				</div>

				<div className={styles['tickets-parameters-wrapper']}>
					<TicketTransferFilter />
					<div className={styles['tab-ticket-wrapper']}>
						<TicketOptionsTab />
						<LoadingTicketsError />
					</div>
				</div>
			</section>
		</Provider>
	)
}

export default App
