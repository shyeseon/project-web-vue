<template>
    <div class="card">
        <div class="card-header">Exam02CounterState</div>
        <div class="card-body">
            <h6>[counter 상태 읽기]</h6>
            <p>count 단방향 바인딩: {{ $store.state.counter.count }}</p>
            <p>count 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
            <p>count 단방향 바인딩: {{ getCount() }}</p>
            <p>count 단방향 바인딩: {{ computedCount }}</p>
            <p>count 양방향 바인딩: <input type="number" v-model="store.state.counter.count"></p>

            <hr/>
            <h6>[counter 변경 상태]</h6>
            <button class="btn btn-info btn-sm me-2" @click="changeByMutation">count 변경(mutation 동기 방식)</button>
            <button class="btn btn-info btn-sm" @click="changeByAction" >count 변경(action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

function getCount(){
    return store.state.counter.count;
}

const computedCount=computed(()=> {
    return store.state.counter.count;
})

function changeByMutation(){
    store.commit("counter/setCount",1)
}

function changeByAction(){
    store.dispatch("counter/addAction",1)
}
</script>

<style scoped>

</style>