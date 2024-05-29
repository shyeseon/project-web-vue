<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <p>data1: {{ message.data1 }}</p>
            <p>data2.name1: {{ message.data2.value.name1 }}</p>
            <p>data2.name2: {{ message.data2.value.name2 }}</p>
            <button class="mt-3 btn btn-dark btn-sm" @click="changeData">데이터 변경</button>
        </div>
    </div>
</template>

<script setup>
import {inject} from "vue";

const message= inject("message")
console.log("data1.value:", message.data1.value);
console.log("data2.value.name1", message.data2.value.name1);
console.log("data2.value.name2",message.data2.value.name2);

//데이터 변경 함수
function changeData(){
    message.data1.value+="1";
    message.data2.value.name1+="1";
    message.data2.value.name2+="1";
}
</script>

<style scoped>

</style>