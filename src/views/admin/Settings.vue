<template>
    <div>
        <v-card xs12 width="400px">
            <v-card-title>
                <span class="title font-weight-bold">Settings</span>
            </v-card-title>
            <v-card-text>
            <v-item-group disable>
                <v-text-field prepend-icon="person" label="Name" type="text"
                v-model="getUser.name" 
                disabled></v-text-field>
                <v-text-field prepend-icon="message" label="email" type="email"
                v-model="getUser.email"
                disabled></v-text-field>
                <br>
                <span class="font-weight-bold">Change Password
                </span>
                <br>

                <v-text-field prepend-icon="lock" label="Old Password" type="password"
                v-model="passwordOld"
                :disabled="value" ></v-text-field>

                <v-text-field prepend-icon="lock" label="New Password" type="password"
                v-model="passwordNew"
                :disabled="value" ></v-text-field>

            </v-item-group>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" :disabled="btnEdit" @click="edit">Edit</v-btn>
            <v-btn color="info" :disabled="btnSave" @click="save">Save</v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import {API_URL} from '@/common/config'
import Swal from 'sweetalert2'

/*eslint-disable*/

export default {
    data(){
        return{
            value:true,
            passwordOld:'',
            passwordNew:'',
            btnEdit:false,
            btnSave:true
        }
    },
    
    created(){   
        this.$store.dispatch('fetchUser',this.$auth.getAuthenticatedUser())
    },
    computed:{
        ...mapGetters([
            'getUser'
        ])
    },
    methods:{
        edit(){
            this.btnSave=false
            this.btnEdit=true
            this.value=false
        },

        save(){
            this.value=true
            this.btnEdit=false
            this.btnSave=true
            let user = axios.create({
                baseURL: `${API_URL}changepassword`,
                headers: {
                    Authorization: 'Bearer '+ localStorage.getItem('token')
                },
                
            })

            user.post('',{
                oldPassword: this.passwordOld,
                newPassword: this.passwordNew,
                email: this.getUser.email
            })
            .then(r => {
                // console.log(r.data)
                Swal.fire(
                    'Data',
                    'Success Edit Password',
                    'success')
            })
            .catch(e => {
                // console.log(e.data)
                Swal.fire(
                    'Data',
                    'Failed Edit Password',
                    'error')
            })
              
        }
    }
}
</script>

<style>

</style>
