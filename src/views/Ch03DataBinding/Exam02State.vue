<template>
    <div class="card">
        <div class="card-header">Exam02State</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name+" - "+company }}</p>
            <p>설명: {{ detail }}</p>
            <p>상태: {{ detail.sale?"판매":"품절" }}</p>
            <p>가격: {{ getPrice() }}</p>
            <hr/>
            <button @click="changeData" class="btn btn-danger btn-sm">상태 변수값 변경</button>
            


        </div>
    </div>
</template>

<script setup>
//일반 데이터 생성(값이 바뀌지 않는다)
import {ref} from "vue"
let no=ref(1);
let name=ref("미니백");
let company=ref("클레인");
let detail=ref({
    info:"시그너츠 Cecyle Lock마그네틱 클로저가 특징입니다",
    sale:false
})
let price=ref(300000);
function getPrice(){
    return price.value;
}
//상태 데이터
    function changeData(){
        no.value++;
        name.value="백팩";

        //detail.value.info="시그너츠 Cecyle Lock마그네틱 클로저와 빨간색의 조화가 좋습니다";
        //detail.value.sale= !detail.value.sale;

        detail.value={
            info:"시그너츠 Cecyle Lock마그네틱 클로저와 빨간색의 조화가 좋습니다",
            sale: ! detail.value.sale
        }
        price.value+=10000;

    }

</script>

<style scoped>

</style>