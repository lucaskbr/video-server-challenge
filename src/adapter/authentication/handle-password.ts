import bcrypt from 'bcrypt'

const saltRounds = 10

const hashPassword = async (password: string): Promise<string> => bcrypt.hash(password, saltRounds)

const passwordMatch = async (password, hash: string): Promise<string> => (
  bcrypt.compare(password, hash)
)

export { hashPassword, passwordMatch }
