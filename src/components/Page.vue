<template>
    <v-card width="1000px">
        <v-card-title><span class="title font-weight-bold">{{title}}</span></v-card-title>
        <v-card-text>
            <v-form>
             <vue-editor v-model="content" :disabled="contentStat"></vue-editor>
            </v-form>   
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn color="success" :disabled="editStat" @click="edit">Edit</v-btn>
            <v-btn color="info" :disabled="saveStat" @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
export default {

    data(){
        return{

            'editStat':false,
            'saveStat':true,
            'contentStat':true
        }
    },

    props:['content','title',],
    components:{
        VueEditor
    },
    methods:{
        edit(){
            this.editStat=true
            this.saveStat=false
            this.contentStat=false
        },
        save(){
            this.editStat=false
            this.saveStat=true
            this.contentStat=true
        }

    }

}
</script>

<style>

</style>
