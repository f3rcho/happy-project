import parents from '../mock/parents.json'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const searchUsers = async () => {
  try {
    return parents.slice(0, 11)
  } catch (error) {
    console.error(error)
    throw new Error('Error getting parents')
  }
}
