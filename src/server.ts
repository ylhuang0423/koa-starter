import 'reflect-metadata'
import { createConnection } from "typeorm"
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import routes from './routes'

createConnection().then(async connection => {
  const app = new Koa()
  const router = new Router()

  routes.forEach(route => {
    router[route.method]('/api'+route.path, route.action)
  })

  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())
  app.listen(3000)
}).catch(err => console.error(err))
