/**
 * Created by zhangyang18 on 2018/2/2.
 */
var app = require('koa')();
var router = require('koa-router')();

var homeAdData = require('./home/ad.js')
router.get('/api/homead',function *(next) {
    this.body = homeAdData
})

//首页--推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page',function *(next){
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
})
// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
