require('dotenv').config()
require('isomorphic-unfetch')
const fs = require('fs')
const Koa = require('koa')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = new Koa()

  server.use(ctx => {
    ctx.respond = false
    ctx.res.statusCode = 200
    handler(ctx.req, ctx.res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
