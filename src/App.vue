<template>
    <div>
        <button>这是一个按钮</button>
        <bandao-row>
            <bandao-button>默认按钮</bandao-button>
            <bandao-button type="primary">主要按钮</bandao-button>
            <bandao-button type="success">成功按钮</bandao-button>
            <bandao-button type="info">信息按钮</bandao-button>
            <bandao-button type="warning">警告按钮</bandao-button>
            <bandao-button type="danger">危险按钮</bandao-button>
        </bandao-row>
        <bandao-row>
            <bandao-button icon="bandao-icon-search" circle></bandao-button>
            <bandao-button type="primary" icon="bandao-icon-edit" circle></bandao-button>
            <bandao-button type="success" icon="bandao-icon-check" circle></bandao-button>
            <bandao-button type="info" icon="bandao-icon-message" circle></bandao-button>
            <bandao-button type="warning" icon="bandao-icon-star-off" circle></bandao-button>
            <bandao-button type="danger" icon="bandao-icon-dbandaoete" circle></bandao-button>
        </bandao-row>
        <bandao-date-picker 
            type="date" 
            placeholder="选择日期">
        </bandao-date-picker>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            pickerOptions: {
                // 禁用时间（返回值为boolean）
                disabledDate(time) {
                    // return time.getTime() < Date.now();// 禁用当前时间之前的时间
                    return time.getTime() > Date.now();// 禁用当前时间之后的时间
                }
            },
            addForm: {
                sbandaoectDates: ''
            }
        }
    }
}

</script>

<style>
* {
    padding: 5px;
}
</style>