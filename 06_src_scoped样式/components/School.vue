<template>
    <div class="demo">
		<h2>学校名称:{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>

    export default {
        name:'SchoolName',
        data() {
            return {
                name:'xup123',
				address:'西安',
            }
        },
    }
</script>
<style scoped>
    .demo {
        background-color: pink;

    }
</style>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>