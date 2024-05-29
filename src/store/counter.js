export default{
    namespaced:true,
    state: {
        count: 100
    },
    getters: {
        //여기서 rootstate와 rootgetters는 index의 state와 getter를 참조한다
        getCount(state,getters,rootstate,rootgetters) {
            return state.count;
        }
    },
    mutations: {
        setCount(state,payload){
            state.count+=payload;

        }
    },
    actions: {
        addAction(context,payload){
            context.commit("setCount",payload);
        }
        
    },

}