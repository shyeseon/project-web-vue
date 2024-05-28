<template>
    <div class="card">
        <div class="card-header">Exam01Props</div>
        <div class="card-body">
            <ChildA prop1="value1"
                    prop2="value2"
                    productNo="1"
                    product-kind="bag"
                    :productPrice="1000"
                    :objectProp="{name:'홍길동', age:25}"
                    :arrayProp="['블랙','레드']"
                    :funProp="() => '리턴값'" />
                
            <hr/>
            <ChildB v-bind:productNo="product.no"
                    :productKind="product.kind"
                    :product="product"
                    v-bind="product"/>
            <button class="mt-3 btn btn-info btn-sm" @click="changeData">상태변경</button>
            <hr/>
            <ChildC propA="문자열"
                    :propB="5"
                    propC="뷰"
                    propD="프론트엔드"
                    :propF="{message: 'thanks'}"
                    :propH="() => '기본값1'"
                    :propI="10"
                    />
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";
const product = ref({
    no:1,
    kind:"bag",

})

function changeData(){
    product.value.no+=1;
    product.value.kind+="g";

}

</script>

<style scoped>

</style>