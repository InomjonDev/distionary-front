import { wordTypeMappings } from '@/constants/words.constants'

export const getShortForm = wordType => {
	return wordTypeMappings[wordType] || 'Unk'
}

export const capitalizeFirstLetter = str => {
	if (!str) return ''
	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
