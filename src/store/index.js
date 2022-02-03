import {createStore} from 'vuex'

export default createStore({
    state:{
        num:0
    },
    mutations:{
        add(state){
            state.num++
        }
    },
    actions:{

    },
    modules:{

    }
})