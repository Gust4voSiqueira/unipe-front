export function formatPhoneNumber(phone) {
  return phone.replace(/[^\d+]/g, '')
}
