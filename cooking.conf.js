var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');
cooking.set({
  entry: {
    app: './src/main.js',
    vendor: ['vue','vuex','vue-router','vue-resource','./src/common/common.css']
  },
  dist: './dist',
  template: [{
     filename: 'index.html',
      template: './src/index.tpl',
      chunks: ['vendor','app']
  }],

  devServer: {
    port: 8080,
      hostname: 'localhost',
      publicPath:"/",
      proxy: {
        '*': {
          target: 'http://mbl.huizuche.com/',
          secure: false
        }
      }
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: [
    {
      name: 'vendor',
      minChunks: 3,
      chunks: ['vendor','app','login']
    }
  ],
  
  publicPath: toPath,
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: false,
  extends: ['vue', 'sass' ]
});

var ev_url = "";
  if(process.env.TEST_ENV=='dev'){
    ev_url='localhost:9045'
   }
  else if(process.env.TEST_ENV=='outertest'){
    ev_url='mbl.huizuche.com'
  }
  else if(process.env.TEST_ENV=='test'){
    ev_url='http://172.16.102.82:81/';
  }
  else{
    ev_url='m.huizuche.com'
  }
cooking.add('plugin.DefinePlugin', new webpack.DefinePlugin({
  ENV_URL:JSON.stringify(ev_url)
}))
//通过一个公用方法来辨别是内测，外测还是生产环境
function toPath(){
  //return process.env.TEST_ENV=='test' ?'/dist/':'http://cdn.com/dist/'
  if(process.env.TEST_ENV=='test'){
    return '/dist/'
  }
  else if(process.env.TEST_ENV=='outertest'){
    return 'http://outertest.cdn.com/dist/'
  }
  else{
    return 'http://cdn.com/dist/'
  }
}
cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
