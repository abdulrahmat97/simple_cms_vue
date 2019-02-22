<template>
<<<<<<< HEAD
    <div>   
    <navbar>
        <template slot="content">
            <v-content xs12 sm12>
                <v-container fill-height fluid>
                <v-layout row wrap>
                        <v-flex md12 lg12 xs12>
                            <v-card>
                                <v-card-text>
                                    <v-slide-x-transition mode='out-in'>
                                    <router-view/>
                                    </v-slide-x-transition>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                </v-layout>
            </v-container>
            </v-content>
        </template>
    </navbar>
    </div>
=======
    <v-content>
    <navbar></navbar>
     <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>   
    </v-content>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
</template>

<script>
import Navbar from '@/components/Navbar.vue'
<<<<<<< HEAD
import axios from 'axios'
import {API_URL} from '@/common/config'

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
        baseURL: `${API_URL}user`,
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem('token')
        }
    })
    user.get()
        .then(response => {
            this.$auth.setAuthenticatedUser(response.data)
    })
    }
=======
export default {
 components:{
    Navbar : Navbar
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
  }
}
</script>

<style>

</style>
