import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './TicketOptionsTab.module.scss'
import {
	toggleCheapestTab,
	toggleFastestTab,
	toggleOptimaTab,
} from '../../reducers/tabSlice'

function TicketOptionsTab() {
	const dispatch = useDispatch()
	const { tabStatus } = useSelector((state) => state.tab)

	return (
		<div className={styles['ticket-tabs-wrapper']}>
			<button
				className={tabStatus.theCheapest ? styles.activeButton : '1'}
				onClick={() => dispatch(toggleCheapestTab())}
				type="button"
			>
				самый дешевый
			</button>
			<button
				className={tabStatus.theFastest ? styles.activeButton : ''}
				onClick={() => dispatch(toggleFastestTab())}
				type="button"
			>
				самый быстрый
			</button>
			<button
				className={tabStatus.optima ? styles.activeButton : ''}
				onClick={() => dispatch(toggleOptimaTab())}
				type="button"
			>
				оптимальный
			</button>
		</div>
	)
}

export default TicketOptionsTab
