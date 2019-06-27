const app = {
    state: {
        isCollapse: false
    },
    mutations: {
        CHANGE_COLLAPSE:(state)=>{
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        changeCollapse:({commit})=>{
            
            commit('CHANGE_COLLAPSE');
        }
    }
}

export default app;