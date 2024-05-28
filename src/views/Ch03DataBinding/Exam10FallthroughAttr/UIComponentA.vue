<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="prop.class" :style="prop.style" @click="emit('click')">Content</div>
            
            <button class="mt-2 btn btn-dark btn-sm" @click="handleClick">버튼</button>
        </div>

       
    </div>

</template>
<script setup>
//값을 지정하게 되면 fallthrough가 발생하지 않는다
const prop=defineProps(["class","style"]);
const emit=defineEmits(["click"]);

function handleClick(){

    //컴포넌트에 속성값 읽기
    console.log(prop.class);
    console.log(prop.style);
    //컴포넌트에 click 이벤트를 발생시킴
    console.log(emit('click'));
}
</script>
<style scoped>

</style>