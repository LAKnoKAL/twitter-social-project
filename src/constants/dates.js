import { add } from 'date-fns'

export const TODAY = new Date()
export const MIN_SCHEDULE_DATE = add(new Date(), { hours: 1 })