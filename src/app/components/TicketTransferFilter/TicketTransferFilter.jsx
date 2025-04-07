import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	setCheckBoxAll,
	setCheckBoxWithoutTransfer,
	setCheckBoxOneTransfer,
	setCheckBoxTwoTransfer,
	setCheckBoxThreeTransfer,
} from '../../reducers/checkBoxSlice'

import styles from './TicketTransferFilter.module.scss'

function TicketTransferFilter() {
	const dispatch = useDispatch()
	const checkBoxStatus = useSelector((state) => state.checkBox.checkBoxStatus)

	return (
		<div className={styles['checkbox-wrapper']}>
			<h2>Количество пересадок</h2>

			<label className={styles.checkbox}>
				<input
					type="checkbox"
					checked={checkBoxStatus.all}
					onChange={() => {
						dispatch(setCheckBoxAll())
					}}
				/>
				<span className={styles.checkmark} />
				Все
			</label>

			<label className={styles.checkbox}>
				<input
					onChange={() => dispatch(setCheckBoxWithoutTransfer())}
					type="checkbox"
					checked={checkBoxStatus.withoutTransfer}
				/>
				<span className={styles.checkmark} />
				Без пересадок
			</label>
			<label className={styles.checkbox}>
				<input
					onChange={() => dispatch(setCheckBoxOneTransfer())}
					type="checkbox"
					checked={checkBoxStatus.oneTransfer}
				/>
				<span className={styles.checkmark} />1 пересадка
			</label>

			<label className={styles.checkbox}>
				<input
					onChange={() => dispatch(setCheckBoxTwoTransfer())}
					type="checkbox"
					checked={checkBoxStatus.twoTransfer}
				/>
				<span className={styles.checkmark} />2 пересадки
			</label>

			<label className={styles.checkbox}>
				<input
					onChange={() => dispatch(setCheckBoxThreeTransfer())}
					type="checkbox"
					checked={checkBoxStatus.threeTransfer}
				/>
				<span className={styles.checkmark} />3 пересадки
			</label>
		</div>
	)
}

export default TicketTransferFilter
