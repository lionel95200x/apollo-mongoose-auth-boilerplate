import jwt from 'jsonwebtoken'
const SECRET_KEY = 'SECRET_KEY'

export const getFreshToken = (user: any) => jwt.sign({ user }, SECRET_KEY)