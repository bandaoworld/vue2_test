//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     // console.log('actions中的add被调用了')
    //     context.commit('ADD', value)
    // },
    // subtract(context, value) {
    //     // console.log('actions中的subtract被调用了')
    //     context.commit('Subtract', value)
    // },
    addOdd(context, value) {
        // console.log('actions中的addOdd被调用了')
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        // console.log('actions中的addWait被调用了')
        setTimeout(() => {
            context.commit('ADD', value)
        })
    }
}
//准备mutations——用于操作数据（state）
const mutations = {
    ADD(state, value) {
        // console.log('mutations中的ADD被调用了');
        state.sum += value
    },
    Subtract(state, value) {
        // console.log('mutations中的Subtract被调用了');
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的ADD_PERSON被调用了')
        state.personList.unshift(value)
    }
}
//准备state——用于存储数据
const state = {
    sum: 0,//当前的和
    school: 'xupt',
    subject: '前端',
    personList: [
        { id: '001', name: 'bandao' }
    ]
}
//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})