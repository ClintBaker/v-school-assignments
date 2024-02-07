const extractInitials = (array) => {
  // array of full names
  // loop over the array and then for each split at space
  const initials = array.map((name) => {
    // array of first and last name
    const splitName = name.split(' ')
    const initialValue = splitName
      .map((name) => {
        return name[0]
      })
      .join('')
    return initialValue
  })

  return initials
  // two strings
  // combine the letter at the first index of each string and return value to our array
  // return array of initials
}

const fullNames = ['John Doe', 'Clint Baker', 'Michael Jordan']

console.log(extractInitials(fullNames))
// ['JD', 'CB', 'MJ']
