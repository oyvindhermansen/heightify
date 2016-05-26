export const warning = (message) => {
  if (!message) throw new Error('No warning message to display')
  throw new Error(message)
}
