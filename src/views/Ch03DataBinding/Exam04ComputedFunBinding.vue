<template>
    <div class="card">
        <div class="card-header">Exam04ComputedFunBinding</div>
        <div class="card-body">
            <p>이름 {{ name }}</p>
            <p>주민번호: {{ getSsn() }}</p>
            <p>주민번호: {{computedSsn }}</p>
            <hr/>
            <button class="btn btn-danger btn-sm me-3" @click="changeName">이름 수정</button>
            <button class="btn btn-danger btn-sm" @click="changeSsn">주민 번호 수정</button>
        </div>
    </div>
</template>

<script setup>
import {computed,ref} from "vue";

//상태 선언
const name=ref("홍길동");
const ssn1=ref("123456");
const ssn2=ref("1234567");

//일반 함수(컴포넌트가 리렌더링 될 때마다 호출)
function getSsn(){
    console.log("getssn() 출력");
    const ssn=ssn1.value+"-"+ssn2.value;
    return ssn;
}

//계산된 함수 (컴포넌트가 리렌더링 되더라도 SSN1과 SSN2의 값이 변경 값이 이전과 동일할 경우 호출이 안됨)
const computedSsn = computed(() =>{
    console.log("computedssn() 출력");
    const ssn= ssn1.value + "-" + ssn2.value.charAt(0)+"*******";
    return ssn;
})

//상태 변경 함수
function changeName(){
    name.value+= "동";
}

function changeSsn(){
    const ssn= ssn1.value + "-" + ssn2.value.charAt(0)+"*******";
  
}
</script>

<style scoped>

</style>