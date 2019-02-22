import axios from 'axios'
import {API_URL} from '@/common/config'
/*eslint-disable*/
export default{
    state:{
        quotes:[]
    },
    
    getters:{
        getQuotes: state => {
            return state.quotes
        }
    },

    mutations:{
        setQuote: (state,data) => {
            state.quotes = data
        }
    },

    actions:{
        inputQuotes: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.post(API_URL + `quotes`,{
                    quotes : payload
                })
                .then(res=>{
                    resolve(res)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        fetchQuotes: ({commit}) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL+'quotes')
                .then(res =>{
                    resolve(res)
                    commit('setQuote',res.data)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        fetchQuote: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.get(API_URL+`quotes/${payload}`)
                .then(res => {
                    resolve(res)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        updateQuote: ({commit},payload) => {
            return new Promise((resolve, reject) => {
                axios.put(API_URL + `quotes/${payload.id}`,{
                    quotes: payload.quotes})
                .then(res => {
                    resolve(res)
                })
                .catch(ex => {
                    reject(ex)
                })
            });
        },

        deleteQuote: ({commit},payload) => {
            return new Promise((resolve, reject) => {
              axios.delete(API_URL + `quotes/${payload}`)
              .then(res => {
                  resolve(res)
              })
              .catch(ex => {
                  reject(ex)
              })
            })
            
        }
    }
}