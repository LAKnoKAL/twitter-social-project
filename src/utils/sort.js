export const sortByDate = ({ dateTime: timeA }, { dateTime: timeB }) => {
  if (timeA === null || timeB === null) {
    return -1
  } else {
    return new Date(timeA).getTime() < new Date(timeB).getTime() ? -1 : 1
  }
}