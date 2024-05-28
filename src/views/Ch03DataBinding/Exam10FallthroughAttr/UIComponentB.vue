<template>
    <div class="card">
        <div class="card-header" :id="$attrs.id">UIComponentB</div>
        <div class="card-body">
            <div class="mb-3" :class="$attrs.class" :style="$attrs.style" @click="$attrs.onClick">
            Content
            </div>
            
            <hr/>
            <button class="btn btn-info btn-sm me-2" @click="handleBtn1">버튼1(속성값 이용)</button>
            <button class="btn btn-info btn-sm" @close="handleBtn2">버튼2(리스너 이용)</button>
        </div>
    </div>

</template>
<script setup>
import { defineOptions,useAttrs } from 'vue';

defineOptions({
    //fallthrough 비활성화
    inheritAttrs:false
})
const attrs=useAttrs();

function handleBtn1(){
    //속성으로 전달된 값 얻기
    console.log(attrs.id);
    console.log(attrs.class);
    console.log(attrs.style);
}
function handleBtn2(){
    //속성으로 전달된 핸들러 함수(리스너)를 호출 
    attrs.onClick();
}
</script>
<style scoped>

</style>