// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { router } from './router';
let app = null;

const render = props => {
  if (props) {
    const { container } = props;
    app = createApp(App);
    app.use(router);
    // console.warn('container', container);
    const c = container?.querySelector('#myApp') || '#myApp'; // 避免 id 重复导致微应用挂载失败
    app.mount(c);
  } else {
    app = createApp(App);
    app.use(router);
    app.mount('#myApp');
  }
};

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('微应用：bootstrap');
    },
    mount(props) {
      // 获取主应用传入数据
      console.log('微应用：mount', props);
      render(props);
    },
    unmount(props) {
      console.log('微应用：unmount', props);
      app?.unmount(); //离开销毁
    },
    update(props) {
      console.log('微应用：update', props);
    },
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(); // 判断是否使用 qiankun ，保证项目可以独立运行
