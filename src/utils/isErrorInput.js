export function isErrorInput(errors, input) {
  return Object.keys(errors).some((value) => value === input)
    ? 'input-error'
    : 'input-normal'
}
