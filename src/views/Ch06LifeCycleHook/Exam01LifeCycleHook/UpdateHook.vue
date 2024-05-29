<template>
    <div class="card">
        <div class="card-header">UpdateHook</div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <button class="btn btn-danger btn-sm mt-2" @click="count++">상태 변경</button>

        </div>
    </div>
</template>

<script setup>
import {onBeforeUpdate, onMounted,onUnmounted, onUpdated, ref} from "vue";

const count =ref(0);



onMounted(() => {
    console.log("UpdateHook 컴포넌트가 마운트 됨");
    count.value=100;
});

onUnmounted(() => {
    console.log("UpdateHook 컴포넌트가 언마운트 됨");
});

onBeforeUpdate(()=> {
    console.log("UpdateHook 컴포넌트가 업데이트 직전임");
})

onUpdated(()=> {
    console.log("UpdateHook 컴포넌트가 업데이트됨");
    //count.value+=1
    //update내에서 상태변경 코드를 넣게되면 무한 반복 
})

</script>

<style scoped>

</style>