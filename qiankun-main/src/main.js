import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import { registerMicroApps, start } from 'qiankun';
window.share = {
  a: 1,
  b: 2,
  router,
};

window.abb = {
  type: 'comment',
};
registerMicroApps([
  {
    name: 'micro-vue-1', // 必须与微应用注册名字相同
    entry: 'http://localhost:40002', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
    container: '#micro-app-container', // 微应用挂载的节点
    activeRule: '/micro-vue', // 当访问路由为 /micro-vue 时加载微应用
    props: {
      msg: '我是来自主应用的值-vue', // 主应用向微应用传递参数
    },
  },
]);

start(); //启动微应用
