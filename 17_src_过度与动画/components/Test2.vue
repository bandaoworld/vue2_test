<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">hello</h1>
            <h1 v-show="isShow" key="2">bandao</h1>
        </transition-group>
        
    </div>
</template>

<script>
    export default {
        name:'Test2Name',
        data() {
            return {
                isShow : true,
            }
        },
    }
</script>

<style scope>
    h1 {
        background-color: orange;
    }
    /* 进入的起点、离开的终点 */
    .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active, .hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点、离开的起点 */
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
    }
    
</style>