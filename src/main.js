/**
 * Created by Administrator on 2017/6/21.
 */
import Vue from 'vue'
import App from './App'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
// import './index.less';


Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
    render:h=>h(App)
}).$mount('#app');