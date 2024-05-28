<template>
    <div class="card">
        <div class="card-header">Child</div>
        <div class="card-body">
            <div>
                <h6>[자식 -> 부모]</h6>
                <button class="btn btn-info btn-sm me-2" @click="$emit('child-event-1','value1')">
                    child-event-1 이벤트 발생 </button>
                    <button class="btn btn-info btn-sm" @click="handleChildEvent2">
                    child-event-2 이벤트 발생 </button>
            </div>
            <div class="mt-3">
                <h6>[자식 -> 부모-> 자식]</h6>        
                <button class="btn btn-info btn-sm me-2" @click="hanldeIncrementEvent">
                    증가(increment-event) </button>
                    <button class="btn btn-info btn-sm" @click="hanldeDecrementEvent">
                    감소(decrement-event) </button>
                    <p class="mt-2">counter: {{ counter }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(["child-event-1", "child-event-2","increment-event", "decrement-event"])

let data1= ref("value1");
let data2=ref(100);
function handleChildEvent2(){
    emit('child-event-2', data1.value, data2.value)
}
//자식->부모
function hanldeIncrementEvent(){
    emit('increment-event',1)
}
function hanldeDecrementEvent(){
    emit('decrement-event',1)
}

const prop= defineProps(["counter"]);
</script>

<style scoped>

</style>