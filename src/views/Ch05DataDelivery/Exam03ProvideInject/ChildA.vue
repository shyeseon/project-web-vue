<template>
    <div class="card">
        <div class="card-header">ChildA</div>
        <div class="card-body">
            <p>data1: {{ message.data1 }}</p>
            <p>data2.name1: {{ message.data2.value.name1 }}</p>
            <p>data2.name2: {{ message.data2.value.name2 }}</p>
            <ChildB/>
        </div>
    </div>
</template>

<script setup>
import {inject} from "vue";
import ChildB from'./ChildB.vue';
const message= inject("message")
console.log("data1.value:", message.data1.value);
console.log("data2.value.name1", message.data2.value.name1);
console.log("data2.value.name2",message.data2.value.name2);

</script>

<style scoped>

</style>