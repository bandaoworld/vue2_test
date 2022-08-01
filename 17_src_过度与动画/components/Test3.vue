<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            >
            <h1 v-show="!isShow" key="1">hello</h1>
            <h1 v-show="isShow" key="2">bandao</h1>
        </transition-group>
        
    </div>
</template>

<script>
    import 'animate.css'
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
    
</style>