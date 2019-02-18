<template>
    <div>   
    <navbar>
        <template slot="content">
            <v-content xs12 sm12>
                <v-container fill-height fluid>
                <v-layout xs12 md12 sm12>
                    <v-slide-x-transition mode='out-in'>
                    <router-view/>
                    </v-slide-x-transition>
                </v-layout>
            </v-container>
            </v-content>
        </template>
    </navbar>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
 components:{
    Navbar : Navbar
  },
  
  created(){
    this.setAuthenticatedUser()
  },

  methods:{
    setAuthenticatedUser () {
    let user = axios.create({
        baseURL: `http://127.0.0.1:8000/api/user`,
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem('token')
        }
    })
    user.get('http://127.0.0.1:8000/api/user')
          .then(response => {
              this.$auth.setAuthenticatedUser(response.data)
    })
    }
  }
}
</script>

<style>

</style>
