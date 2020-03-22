let path = require('path')
let Deploy = require('../oss-static/build/oss-lib')

// 要上传的静态文件目录
let baseDir = path.resolve('./src')

Deploy = Deploy.default
let deploy = new Deploy({
  bucket: 'hackathon-ncuhome', //oss仓库名
  region: 'oss-cn-hangzhou', // oss仓库region
})
deploy.uploadFiles({
  baseDir, // 路径
  exclude: ['stats.json'] //要忽略的文件或文件夹
})
