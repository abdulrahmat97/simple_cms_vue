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
                :disabled="value"></v-text-field>
                <v-text-field prepend-icon="message" label="email" type="email"
                v-model="getUser.email"
                :disabled="value"></v-text-field>
                <v-text-field prepend-icon="lock" label="Password" type="password"
                v-model="getUser.password"
                :disabled="value" ></v-text-field>
            </v-item-group>
        </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            value:true
        }
    },
    
    created(){   
        this.$store.dispatch('fetchUser',this.$auth.getAuthenticatedUser())
    },
    computed:{
        ...mapGetters([
            'getUser'
        ])
    }
}
</script>

<style>

</style>
