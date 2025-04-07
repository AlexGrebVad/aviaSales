import React from 'react'
import { useSelector } from 'react-redux'
import styles from './TicketsLoader.module.scss'

function TicketsLoader() {
	const { ticketLoadProgress } = useSelector((state) => state.ticketLoadErr)

	return (
		<div>
			<h2 className={styles.ticketsLoaderHeader}>Идет загрузка билетов...</h2>
			<div
				style={{ width: `${ticketLoadProgress}%` }}
				className={styles.ticketsLoaderLoadingBlock}
			/>
		</div>
	)
}

export default TicketsLoader
