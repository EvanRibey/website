const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const Router = require('koa-router');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware/src')
const path = require('path');

const app = new Koa();
const router = new Router();

const port = process.env.PORT || '8000';
// const config = require('./webpack.dev');
// const compiler = webpack(config);

router.get('/', async (ctx) => {
  await ctx.render('index');
});

app
  .use(views(path.resolve(__dirname, './build')), { map: { html: 'swig' } })
  .use(serve('./build'))
  // .use(webpackDevMiddleware(compiler, {
  //   publicPath: config.output.publicPath
  // }))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => console.info(`The magic is happening at: http://localhost:${port}`));
