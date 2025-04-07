import React from 'react'
import { add, format } from 'date-fns'
import styles from './Ticket.module.scss'

function culcFlyDuration(flyStart, flyDuration) {
	const startDate = new Date(flyStart)
	const endDate = add(startDate, { minutes: flyDuration })

	const startTime = format(startDate, 'HH:mm')
	const endTime = format(endDate, 'HH:mm')

	return `${startTime} – ${endTime}`
}

function convertMinutesToHours(minutes) {
	const hours = Math.floor(minutes / 60)
	const mins = minutes % 60
	return `${hours}ч ${mins}м`
}

function transferGramma(transferCount) {
	let spell = ''
	switch (transferCount) {
		case 0:
			spell = 'пересадок'
			break

		case 1:
			spell = 'пересадка'
			break

		default:
			spell = 'пересадки'
			break
	}

	return spell
}

function Ticket({ ticketItem }) {
	console.log(ticketItem)
	return (
		<div className={styles['ticket-wrapper']}>
			<div className={styles['ticket-wrapper__header']}>
				<p>{`${ticketItem.price} Р`}</p>
				<div className={styles['ticket-wrapper__img']}>
					<img
						src={`//pics.avs.io/99/36/${ticketItem.carrier}.png`}
						alt="company logo"
					/>
				</div>
			</div>
			{/* грид сетка  */}
			<div className={styles['ticket-wrapper__grid-block']}>
				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p
						className={styles['ticket-wrapper__grid-head-elem']}
					>{`${ticketItem.segments[0].origin} - ${ticketItem.segments[0].destination} `}</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{culcFlyDuration(
							ticketItem.segments[0].date,
							ticketItem.segments[0].duration,
						)}
					</p>
				</div>

				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p className={styles['ticket-wrapper__grid-head-elem']}>в пути</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{convertMinutesToHours(ticketItem.segments[0].duration)}
					</p>
				</div>

				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p className={styles['ticket-wrapper__grid-head-elem']}>
						{ticketItem.segments[0].stops.length}{' '}
						{transferGramma(ticketItem.segments[0].stops.length)}
					</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{ticketItem.segments[0].stops.join(', ')}
					</p>
				</div>
				{/* нижний ряд билета */}
				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p
						className={styles['ticket-wrapper__grid-head-elem']}
					>{`${ticketItem.segments[1].origin} - ${ticketItem.segments[1].destination} `}</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{culcFlyDuration(
							ticketItem.segments[1].date,
							ticketItem.segments[1].duration,
						)}
					</p>
				</div>

				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p className={styles['ticket-wrapper__grid-head-elem']}>в пути</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{convertMinutesToHours(ticketItem.segments[1].duration)}
					</p>
				</div>

				<div className={styles['ticket-wrapper__grid-block-elem']}>
					<p className={styles['ticket-wrapper__grid-head-elem']}>
						{ticketItem.segments[1].stops.length}{' '}
						{transferGramma(ticketItem.segments[1].stops.length)}
					</p>
					<p className={styles['ticket-wrapper__grid-time-elem']}>
						{ticketItem.segments[1].stops.join(', ')}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Ticket
