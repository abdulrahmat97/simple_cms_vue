<template>
    <v-card sm12 md12 lg12 lx12>
        <v-card-title><span class="title font-weight-bold">{{title}}</span></v-card-title>
        <v-card-text>
            <v-form>
             <vue-editor v-model="content" :disabled="contentStat"></vue-editor>
            </v-form>   
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn color="success" :disabled="editStat" @click="edit">Edit</v-btn>
            <v-btn color="info" :disabled="saveStat" @click="save(page)">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
import Swal from 'sweetalert2'
/* eslint-disable */

export default {

    data(){
        return{

            'editStat':false,
            'saveStat':true,
            'contentStat':true
        }
    },

    props:['content','title','page'],
    components:{
        VueEditor
    },
    methods:{
        edit(){
            this.editStat=true
            this.saveStat=false
            this.contentStat=false
        },
        save(val){
            this.editStat=false
            this.saveStat=true
            this.contentStat=true
            let data = {
                id : val,
                content : this.content
            }
            this.$store.dispatch('updatePage',data)
            .then(res => {
                Swal.fire(
                    'Data',
                    'Success Edit Page Content',
                    'success')
                this.$store.dispatch('fetchPageA')
                this.$store.dispatch('fetchPageB')
                this.$store.dispatch('fetchPageC')
                this.$store.dispatch('fetchPageD')
            })
            .catch(ex => {
                Swal.fire(
                    'Data',
                    'Failed Edit Page Content',
                    'error')
            })
        }

    }

}
</script>

<style>

</style>
