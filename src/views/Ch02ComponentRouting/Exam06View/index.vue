<template>
    <div class="card">
        <div class="card-header">Exam06View</div>
        <div class="card-body">
            <h5>경로변수 parameter로 전달</h5>
            <ul>
                <li><RouterLink to="/Ch02ComponentRouting/Exam07View/freeboard/blue">
                    Exam07View/freeboard/blue</RouterLink></li>
                   
                    <li><RouterLink :to="`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`">
                        Exam07View/${kind1}/${color1}</RouterLink></li>
                    <li>
                    <button class="btn btn-info btn-sm " @click="goUrlWithParams()">Exam07View/freeboard/blue</button>
                    </li>
                <h5 class="mt-5">쿼리스트링으로 전달</h5>
          
                <li><RouterLink to="/Ch02ComponentRouting/Exam07View?kind=notice&color=red">
                    exam07View?kind=notice&color=red</RouterLink></li>

                    <li><RouterLink :to="`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`">
                        Exam07View?kind=${kind2}&color=${color2}</RouterLink></li>
                    <li>
                    <button class="btn btn-info btn-sm" @click="goUrlWithQueryString()">am07View?kind=notice&color=red</button>
                    </li>
            </ul>
      
      
        </div>
    </div>
</template>

<script setup>
   import { useRouter } from 'vue-router';
    const router= useRouter();
    const kind1= "freeboard";
    const color1="blue";
    const kind2="notice";
    const color2="red";
function goUrlWithParams(){
 //router.push("/Ch02ComponentRouting/Exam07View/"+kind1+"/"+color1)
 router.push(`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`)

}
function goUrlWithQueryString(){
   // router.push("/Ch02ComponentRouting/Exam07View?kind=notice&color=red")
   router.push(`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`)
}
</script>

<style scoped>
</style>