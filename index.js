'use strict'
const alfy = require('alfy')
const moment = require('moment')

const getDay = dayName => {
  const today = moment()
	let day = moment().day(dayName)
	return day.isAfter(today) ? day : day.add(1, 'w')
}

let str = alfy.input.toLocaleLowerCase()

switch (true) {
	case /today/.test(str):
		str = moment().format('dddd')
		break
	case /tomorrow/.test(str):
		str = moment()
			.add(1, 'd')
			.format('dddd')
		break
	default:
		break
}

let date = getDay(str)
alfy.output([
	{
		title: date.format('l'),
		arg: date.format('l'),
		icon: { path: alfy.icon.get('Clock') },
	},
	{
		title: date.format('ddd LL'),
		arg: date.format('ddd LL'),
		icon: { path: alfy.icon.get('Clock') },
	},
	{
		title: date.add(1, 'd').format('ddd LL'),
		arg: date.add(1, 'd').format('ddd LL'),
		icon: { path: alfy.icon.get('Clock') },
		subtitle: 'day after',
	},
])
