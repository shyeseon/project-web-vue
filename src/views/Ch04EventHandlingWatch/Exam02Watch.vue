<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body" >
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>
            <div class=" mb-2">
                <button class="btn btn-danger btn-sm" @click="handleProductChange">product 상태의 객체 변경</button>
            </div>
             
        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';

//상태 생성
let userId=ref("");
let product = ref({
    name:"",
    company:"",
    price:0
})

//상태 감시

watch(userId, (newUserID, oldUserID) => {
    console.group("userID 변경 감시")
    console.log("newUserID: "+newUserID);
    console.log("oldUserID: "+oldUserID);
    console.groupEnd();
} );

//객체 자체가 변경될 때를 감시
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 변경 감시")
    console.log("newProduct",JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct",JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();

})

//객체 자체 뿐만 아니라 속성까지도 변경 감시
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 뿐만 아니라 속성까지도 변경 감시")
    console.log("newProduct",JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct",JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
//deep은 객체의 속성값 변경까지 감시하겠다는 의미
},{deep:true});

//특정 속성만 변경 감시
watch(()=> product.value.price, (newPrice, oldPrice) =>{
    console.group("가격 속성만 변경 감시")
    console.log("newPrice",newPrice);
    console.log("oldPrice",oldPrice);
    console.groupEnd();
} ) 


function handleProductChange(){

    //객체 자체 변경
    product.value={
    name:"제네시스",
    company:"현대",
    price:80000000
    }
     //속성값만 변경
    product.value.price=92000000;
}

//복수개의 상태를 감시할 경우
watch([userId, product], ([newUserId, oldUserID],[newProduct,oldProduct]) => {
    console.group("복수개의 상태를 감시할 경우")
    console.log("newUserID: "+newUserId);
    console.log("oldUserID: ",oldUserID);
    console.log("newProduct",JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct",JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
})


</script>

<style scoped>

</style>