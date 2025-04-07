function transferFilter(ticketArrayItem, checkBoxStatus) {
	const availableStops = []
	if (checkBoxStatus.oneTransfer) {
		availableStops.push(1)
	}
	if (checkBoxStatus.twoTransfer) {
		availableStops.push(2)
	}
	if (checkBoxStatus.threeTransfer) {
		availableStops.push(3)
	}
	if (checkBoxStatus.withoutTransfer) {
		availableStops.push(0)
	}
	const isSegmentValid = ticketArrayItem.segments.every((segment) =>
		availableStops.includes(segment.stops.length),
	)

	return isSegmentValid
}

function sortByTab(tabStatusList) {
	if (tabStatusList.theCheapest) {
		return (a, b) => a.price - b.price
	}

	if (tabStatusList.theFastest) {
		return (a, b) => {
			const durationA = a.segments[0].duration + a.segments[1].duration
			const durationB = b.segments[0].duration + b.segments[1].duration
			return durationA - durationB
		}
	}

	if (tabStatusList.optima) {
		return (a, b) => {
			const totalA = a.price + (a.segments[0].duration + a.segments[1].duration)
			const totalB = b.price + (b.segments[0].duration + b.segments[1].duration)
			return totalA - totalB
		}
	}

	return () => 0
}

function hasActiveCheckbox(checkBoxBool) {
	return Object.values(checkBoxBool).includes(true)
}

export { sortByTab, transferFilter, hasActiveCheckbox }
