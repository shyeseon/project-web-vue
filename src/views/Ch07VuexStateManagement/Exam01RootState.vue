<template>
    <div class="card">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
            <h6>[루트 상태 읽기]</h6>
            <p>userID 단방향 바인딩: {{ $store.state.userID }}</p>
            <p>userID 단방향 바인딩: {{ $store.getters.getUserID }}</p>
            <p>userID 단방향 바인딩: {{ getUserID() }}</p>
            <p>userID 단방향 바인딩: {{ computedUserID }}</p>
            <p>userID 양방향 바인딩: <input type="text" v-model="store.state.userID"></p>

            <hr/>
            <h6>[루트 변경 상태]</h6>
            <button class="btn btn-info btn-sm me-2" @click="changeByMutation">userID 변경(mutation 동기 방식)</button>
            <button class="btn btn-info btn-sm" @click="changeByAction" >userID 변경(action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store=useStore();

const computedUserID=computed(() => {
    return store.state.userID
})
function getUserID(){
    return store.state.userID
}

function changeByMutation(){
    new Promise((resolve,reject)=> {
    //서버와 통신 작업
    //...3초 소요
    
    if(true) {
        //로그인 성공
        resolve({result:"success",userID:"summer"})
    } else{
        //로그인 실패
        resolve({result:"fail", reason:"password is wrong"})
    }
     })
    
        .then((data) =>{
          //작업이 성공적으로 처리가 됐을 경우
         //상태 변경 작성
            store.commit("setUserID","spring");
            console.log("로그인 성공")
     })
     .catch((error) => {
        //작업이 실패처리 되었을 경우 
        console.log("로그인 실패")
    });

}
function changeByAction(){
    store.dispatch("loginAction", {userID:"summer"});

}
</script>

<style scoped>

</style>