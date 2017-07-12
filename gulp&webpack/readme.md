### gulp&webpack
- 主要用于专题等小项目开发。
- 语法主要包括SASS、ES6。
- 功能主要包括：autoprefixer、cssgrace（兼容IE8），JS模块化（webpack，require引入），css、js、图片压缩以及browserSync。
- webpack中仅实现js打包，只生成index.js
- config中配置线上地址（本地静态资源地址需要以./开头的相对地址）

#### 不足
- HTML中资源地址替换不合理，应该修改为正则匹配，或者更改为模板方式。
- config任务不合理，使用的不是gulp中stream的方式，非异步。
- js只能生成为单个index.js，css生成多个css，如果使用sprite.scss会多生成文件。
- 图片任务中，没有集成图片精灵（平时用得不多，单独拿出来了）。
- 没有集成字蛛对font进行处理（平时用得不多）。
