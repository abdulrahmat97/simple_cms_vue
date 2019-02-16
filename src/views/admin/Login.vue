<template>
    <div>
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
                  v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
                  v-model="password"></v-text-field>
                </v-form>
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
import axios from 'axios'
export default {
  data(){
    return{
      email :'',
      password : '',
      key:''
    }
  },

  created(){
    axios.get('http://127.0.0.1:8000/api/secretkeys')
    .then(res => {
      this.key = res.data.data.secret
    })
  },

  methods:{
    login(){
      var data = {
        client_id: 2,
        client_secret : this.key,
        grant_type : 'password',
        username : this.email,
        password : this.password
      }

      axios.post('http://127.0.0.1:8000/oauth/token', data)
      .then(res => {
        this.$auth.setToken(res.data.access_token,res.data.expires_in + Date.now())
        this.$router.push("/admin/")
        // location.reload(true)
      })

    }
  }
}
</script>

<style>

</style>
