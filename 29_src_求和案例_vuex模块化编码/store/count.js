//求和相关的配置
export default {
    namespaced: true,
    actions:{
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
    },
    mutations:{
        ADD(state, value) {
            // console.log('mutations中的ADD被调用了');
            state.sum += value
        },
        Subtract(state, value) {
            // console.log('mutations中的Subtract被调用了');
            state.sum -= value
        },
    },
    state:{
        sum: 0,//当前的和
        school: 'xupt',
        subject: '前端',
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    }
}