import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Alert, Button } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import {
	sortByTab,
	transferFilter,
	hasActiveCheckbox,
} from '../../utils/utilsForTickets'
import Ticket from '../Ticket/Ticket'
import ticketService from '../../../services/ticketService'
import fetchTickets from '../../../services/ticketThunk'
import TicketsLoader from '../TicketsLoader/TicketsLoader'
import styles from './loadingError.module.scss'

function LoadingTicketsError() {
	const dispatch = useDispatch()
	const { ticketArr, loading, err, ticketLoadProgress } = useSelector(
		(state) => state.ticketLoadErr,
	)
	const { tabStatus } = useSelector((state) => state.tab)
	const { checkBoxStatus } = useSelector((state) => state.checkBox)

	const [visibleCount, setVisibleCount] = useState(5)

	useEffect(() => {
		ticketService
			.getSearchId()
			.then((responce) => dispatch(fetchTickets(responce.searchId)))
	}, [dispatch])

	const showMoreTickets = () => {
		setVisibleCount((prev) => prev + 5)
	}

	return (
		<>
			{!hasActiveCheckbox(checkBoxStatus) && (
				<Alert
					className={styles.errorBlock}
					description="Рейсов, подходящих под заданные фильтры, не найдено"
				/>
			)}
			<AnimatePresence>
				{!loading &&
					!err &&
					hasActiveCheckbox(checkBoxStatus) &&
					ticketLoadProgress !== 100 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.3 } }}
						>
							<TicketsLoader />
						</motion.div>
					)}
			</AnimatePresence>

			{loading && (
				<Spin
					size="large"
					className={`${styles.centeredSpinner} ${styles.largeSpinner}`}
				/>
			)}

			{!loading && err && (
				<Alert
					className={styles.errorBlock}
					message="Ошибка"
					description="Произошла ошибка при загрузке данных"
					type="error"
					closable
					closeIcon={<div className={styles.closeIcon}>!</div>}
				/>
			)}

			{!loading &&
				!err &&
				ticketArr
					.filter((elem) => {
						return transferFilter(elem, checkBoxStatus)
					})
					.sort(sortByTab(tabStatus))
					.slice(0, visibleCount)
					.map((elem) => {
						return (
							<Ticket
								ticketItem={elem}
								key={elem.price + elem.segments[0].date}
							/>
						)
					})}

			{!loading &&
				hasActiveCheckbox(checkBoxStatus) &&
				!err &&
				visibleCount < ticketArr.length && (
					<div className={styles.buttonWrapper}>
						<Button onClick={showMoreTickets} type="primary">
							Показать ещё 5 билетов
						</Button>
					</div>
				)}
		</>
	)
}

export default LoadingTicketsError
