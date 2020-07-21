import Vue from 'vue';
import Vuex from 'vuex';

// 1. 安装
Vue.use(Vuex);
// 2. 创建对象
let store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {id: 1,age: 12},
      {id: 2,age: 232},
      {id: 3,age: 132},
      {id: 4,age: 52},
      {id: 5,age: 16},
    ]
}});

// 3. 导出
export default store
