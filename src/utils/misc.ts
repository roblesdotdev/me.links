export function maskEmail(email: string) {
  const [name, domain] = email.split('@')
  if (!name || !domain) return email

  const [domainName, ...rest] = domain.split('.')
  const tld = rest.join('.')

  const maskedName = name.length > 1 ? `${name[0]}****` : '*'
  const maskedDomain = domainName.length > 2 ? '****' : '*'

  return `${maskedName}@${maskedDomain}.${tld}`
}
