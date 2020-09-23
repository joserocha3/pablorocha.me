import { parseISO, format } from 'date-fns'
import { Text } from '@chakra-ui/core'

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString)

  return (
    <Text as="time" dateTime={dateString} fontSize="xs" color="gray.500">
      {format(date, 'LLLL	d, yyyy')}
    </Text>
  )
}

export default DateFormatter
