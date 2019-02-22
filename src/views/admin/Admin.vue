<template>
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
</template>

<script>
import Navbar from '@/components/Navbar.vue'
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
  }
}
</script>

<style>

</style>
