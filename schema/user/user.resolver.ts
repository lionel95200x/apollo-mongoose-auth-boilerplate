import { AuthenticationError, ForbiddenError } from 'apollo-server-errors';
import { User } from '../../model/user';
import { getFreshToken } from '../../utils';

interface IContext {
    decodedToken: {
        user: {
            _id: String
        }
    }
}

function validEmail(email: string) {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}

export const getLoggedUserContext = (context: IContext) => {
    const { user } = context.decodedToken
    if (user && user._id) {
        return user
    }
    throw new ForbiddenError('Token expired')
}

const resolvers = {
    Query: {
        user: async (parent: any, args: any, context: IContext) => {
            const { _id } = getLoggedUserContext(context)
            return await User.findByIdAndUpdate(_id).exec()
        },
        users: async (parent: any, args: any, context: IContext) => {
            return await User.find({}).sort({ score: "descending" }).exec()
        },
    },
    Mutation: {

        login: async (_: any, args: any) => {
            const { email, password } = args
            const user = await User.findOne({}).where('email').equals(email).exec()
            if (user) {
                if (user.password !== password) {
                    throw new AuthenticationError('Mot de passe incorrect')
                }
            } else {
                throw new AuthenticationError('Il n\'existe aucun utilisateur avec cet email/mot de passe')
            }
            const token = getFreshToken(user)
            user.token = token
            return user
        },
        register: async (_: any, args: any) => {
            const { email, password, displayName, whereYouFindUs } = args
            if (typeof displayName !== "string" || displayName === "") {
                throw new AuthenticationError("Le nom  d'utilisateur ne peut pas etre vide")
            }
            if (!validEmail(email)) {
                throw new AuthenticationError('Veuillez saisir un email valide')
            }
            const userExist = await User.find({ $or: [{ email }, { displayName }] }).exec()
            if (userExist.length) {
                const isSameEmail = userExist[0].email === email
                throw new AuthenticationError(`Il existe deja un utilisateur avec cet ${isSameEmail ? 'email' : 'username'}`)
            } else {
                const initialUser = {
                    score: 0,
                    email, displayName, whereYouFindUs,
                    password,
                }
                let user = await User.create(initialUser)
                const token = getFreshToken(user)
                user.token = token
                return user
            }
        },
        pushToken: async (_: any, args: { pushToken: string }) => {
            const { pushToken } = args
            const token = await PushToken.create({ pushToken })
            return token
        }
    },
}

export default resolvers