<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">hello</h1>
        </transition>
        
    </div>
</template>

<script>
    export default {
        name:'TestName',
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
    .hello-enter-active{
        animation: atguigu 1s;
    }
    .hello-leave-active {
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>