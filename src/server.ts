import 'reflect-metadata'
import { createConnection } from "typeorm"
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import * as serve from 'koa-static'
import * as history from 'koa2-history-api-fallback'
import routes from './routes'

createConnection().then(async connection => {
  const app = new Koa()
  const router = new Router()

  app.use(history())
  app.use(serve('public'))

  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  routes.forEach(route => router[route.method]('/api'+route.path, route.action))

  app.listen(3000, () => console.log('Server is started.'))
}).catch(err => console.error(err))
