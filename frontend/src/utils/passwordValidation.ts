export const passwordCriteria = [
  { label: 'Mín. 8 caracteres', test: (p: string) => p.length >= 8 },
  { label: 'Uma letra maiúscula', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'Uma letra minúscula', test: (p: string) => /[a-z]/.test(p) },
  { label: 'Um número', test: (p: string) => /[0-9]/.test(p) },
]

export function getPasswordStrength(password: string) {
  return passwordCriteria.filter(c => c.test(password)).length
}

export function isPasswordValid(password: string) {
  return getPasswordStrength(password) === passwordCriteria.length
}