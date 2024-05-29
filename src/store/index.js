import { createStore } from 'vuex'
import counter from './counter.js'
//스토어 객체 생성
const store= createStore({
  //루트 상태를 정의
  state: {
    userID: "shs"
  },
  //루트 상태를 읽는 메소드 정의 
  getters: {
    getUserID(state,getters,rootstate,rootgetters){
      return state.userID;
    }
  },
  //루트 상태를 변경하는 메소드를 정의(동기 방식)
  mutations: {
    setUserID(state,payload){
      state.userID=payload;
    }
  },
  //루트 상태를 변경하는 메소드를 정의(비동기 방식)
  actions: {
    loginAction(context, payload){
      new Promise((resolve,reject)=> {
        //서버와 통신 작업
        //...3초 소요
        
        if(true) {
          //로그인 성공
          resolve({result:"success",userID:payload.userID})
        } else{
          //로그인 실패
          reject({result:"fail", reason:"password is wrong"})
        }
      })
        
        .then((data) =>{
          //작업이 성공적으로 처리가 됐을 경우
          //상태 변경 작성
          context.commit("setUserID",data.userID);
          console.log("로그인 성공")
        })
        .catch((error) => {
          //작업이 실패처리 되었을 경우 
          console.log("로그인 실패")
        });
      }
  },
  //루트 하위의 상태를 정의
  modules: {
    counter,
  }
});
//스토어 객체를 내보내기
export default store;
