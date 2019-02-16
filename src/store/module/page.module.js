import axios from 'axios'
import {API_URL} from '@/common/config'
/*eslint-disable*/
export default{
    state:{
        page_a:'',
        page_b:'',
        page_c:'',
        page_d:''
    },
    
    getters:{
        getPageA: state => {
            return state.page_a
        },

        getPageB: state => {
            return state.page_b
        },

        getPageC: state => {
            return state.page_c
        },

        getPageD: state => {
            return state.page_d
        }
    },

    mutations:{
        setPageA: (state,data) => {
            state.page_a = data
        },

        setPageB: (state,data) => {
            state.page_b = data
        },

        setPageC: (state,data) => {
            state.page_c = data
        },

        setPageD: (state,data) => {
            state.page_d = data
        }
    },

    actions:{
        fetchPageA: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL + 'pages/1')
                .then(res => {
                    resolve(res)
                    commit('setPageA',res.data)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        fetchPageB: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL+ 'pages/2')
                .then(res => {
                    resolve(res)
                    commit('setPageB',res.data)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        fetchPageC: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL + 'pages/3')
                .then(res => {
                    resolve(res)
                    commit('setPageC',res.data)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        fetchPageD: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL + 'pages/4')
                .then(res => {
                    resolve(res)
                    commit('setPageD',res.data)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        updatePage: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.put(API_URL,payload)
                .then(res => {
                    resolve(res)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },
    }
}