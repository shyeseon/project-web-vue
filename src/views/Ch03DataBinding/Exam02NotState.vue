<template>
    <div class="card">
        <div class="card-header">Exam02NotState</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name+" - "+company }}</p>
            <p>설명: {{ detail.info }}</p>
            <p>상태: {{ detail.sale?"판매":"품절" }}</p>
            <p>가격: {{ getPrice() }}</p>
            <hr/>
            <button @click="changeData" class="btn btn-danger btn-sm">일반 변수값 변경</button>
            


        </div>
    </div>
</template>

<script setup>
//일반 데이터 생성(값이 바뀌지 않는다)
let no=1;
let name="미니백";
let company="클레인";
let detail={
    info:"시그너츠 Cecyle Lock마그네틱 클로저가 특징입니다",
    sale:false
}
let price=300000;
function getPrice(){
    return price;
}
//상태 데이터
    function changeData(){
        no=2;
        name="백팩";
    }

</script>

<style scoped>

</style>