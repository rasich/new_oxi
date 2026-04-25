import { stackMiddlewares } from './middlewares/stackMiddlewares'
import { withAuth } from './middlewares/withAuth'
import { withI18n } from './middlewares/withI18n'

const middlewares = [withAuth, withI18n]
export default stackMiddlewares(middlewares)

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
}
