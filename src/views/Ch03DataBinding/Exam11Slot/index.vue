<template>
    <div class="card">
        <div class="card-header">Exam11Slot</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-2" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-info btn-sm me-2" @click="showDialogB">알림 다이얼로그</button>
            <button class="btn btn-info btn-sm" @click="showDialogC">로그인 다이얼로그</button>
        </div>
         <!--dialog는 반드시 id 값을 가져야 하는데 각 다이어로그 마다 다른 고유의 id 값을 가져야 한다.-->
        <DialogA id="dialogA"/>
        <DialogB id="dialogB" @close="hideDialogB"/>
        <DialogC id="dialogC" @close="hideDialogC"/>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import DialogC from "./DialogC.vue";
import { Modal } from "bootstrap";

let modalDialogA = null;
let modalDialogB = null;
let modalDialogC = null;

//컴포넌트가 생성되고, DOM 부착될때 자동으로 실행되는 콜백
onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
    modalDialogB = new Modal(document.querySelector("#dialogB"));
    modalDialogC = new Modal(document.querySelector("#dialogC"));
});

function showDialogA() {
    modalDialogA.show();
}

function showDialogB() {
    modalDialogB.show();
}

function showDialogC() {
    modalDialogC.show();
}
//모달이 실행되는 클릭 이벤트가 선언된 곳에서 함수를 호출하고 다이어로그 객체가 선언된 곳에서 함수를 작성한다.
function hideDialogB() {
    modalDialogB.hide();
}
function hideDialogC(){
    modalDialogC.hide();
}
</script>

<style scoped>
</style>