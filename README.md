
### 1. 安装依赖项目

```
npm install or yarn
```

### 2. 运行

```
npm start or yarn start
```

### 3. 添加的依赖项


**样式：**

npm install --save node-sass sass-loader

**路由：**  

npm install --save react-router-dom

**状态：**  

npm install --save react-redux，redux-thunk，
npm install --save-dev redux-devtools

**类型检测**

npm install --save prop-types

**骨架屏**

npm install --save react-placeholder

**代码分割和懒加载**

yarn add react-loadable

**数据处理**
Immutable

**行内样式处理**
classnames


**文件打包体积分析**
webpack有个插件，可以查看项目一共打了多少包，每个包的体积，每个包里面的包情况

**安装**
```
npm install --save-dev webpack-bundle-analyzer
```
webpack.config.js 中的配置
如果是create-react-app直接生成的，可将下面的内容添加到`webpack.config.prod.js`中

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
plugins: [
new BundleAnalyzerPlugin(
   		{
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
			  analyzerPort: 8889,
			  reportFilename: 'report.html',
			  defaultSizes: 'parsed',
			  openAnalyzer: true,
			  generateStatsFile: false,
			  statsFilename: 'stats.json',
			  statsOptions: null,
			  logLevel: 'info'
      }
   	),
]
```

**在package.json的scripts里加入下面这句话，就可以npm run build之后看到webpack-bundle-analyzer的效果：**

`"analyz": "NODE_ENV=production npm_config_report=true npm run build"`

[参考地址](https://www.npmjs.com/package/webpack-bundle-analyzer)


**react 项目配置eslint**

[参考文章](https://juejin.im/post/58ff0de18d6d810058a69a26)

配置pre-commit后 可以通过在命令中添加`--no-verify`参数来跳过，如:`git commit -m '~~' --no-verify`


### 4. 富文本编辑器

`npm install --save braft-editor`

[github](https://github.com/margox/braft-editor)

`npm install --save react-draft-wysiwyg`

[github](https://github.com/jpuri/react-draft-wysiwyg)

### 5.react 项目优化

[参考文章](https://juejin.im/post/5b302759e51d4558db46a9aa?utm_source=gold_browser_extension)
