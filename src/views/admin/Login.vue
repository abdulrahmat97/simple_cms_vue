<template>
    <div>
      <loading :value="loading"></loading>
        <v-container>
         <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="text"
                  v-model="email" @input="alert = false"
                  ></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
                  v-model="password" @input="alert = false"></v-text-field>
                </v-form>
                <v-alert
                  :value="alert"
                  type="error"
                  transition="scale-transition"
                >
                  Email or password doesn't match
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
// import { CLIENT_SECRET } from "@/common/config"

/*eslint-disable*/
import Loading from '@/components/Loading.vue'
import axios from 'axios'
export default {
  data(){
    return{
      email :'',
      password : '',
      key:'',
      alert: false,
      loading:false
    }
  },

  components:{
    'Loading': Loading
  },

  created(){
    axios.get('http://satriaharis.com/webservice/api/secretkeys')
    .then(res => {
      this.key = res.data.data.secret
    })
    .catch(ex => {
      
    })
  },

  methods:{
    login(){
      this.loading=true
      var data = {
        client_id: 2,
        client_secret : this.key,
        grant_type : 'password',
        username : this.email,
        password : this.password
      }

      axios.post('http://satriaharis.com/webservice/oauth/token', data)
      .then(res => {
        this.$auth.setToken(res.data.access_token,res.data.expires_in + Date.now())
        this.$router.push("/admin/")
        this.alert=false
        this.loading = false
        // console.log(res.data)
        // location.reload(true)
      })
      .catch(ex => {
        this.loading = false
        this.alert=true
      })

    }
  }
}
</script>

<style>

</style>
