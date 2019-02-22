<template>
        <v-card m12 md12 lg12 lx12>
            <v-card-title><span class="title font-weight-bold">Quotes</span>
            </v-card-title>
                <v-btn round color="primary" dark @click="addQuote">Add Quote</v-btn>
                <br>
                <data-tabel :headers="headers" :items="getQuotes" :dialog.sync="dialog" :title="title">
                    <template slot="form">
                        <v-textarea
                        outline
                        label="Quote"
                        v-model="quote">
                        </v-textarea>
                    </template>      
                    <template slot="button">
                        <v-btn color="blue darken-1" flat @click="dialog=false">Close</v-btn>
                        <v-btn color="blue darken-1" flat @click="saveQuote(statSave)">Save</v-btn>
                    </template>        
                    <template slot="field" slot-scope="props">
                            <td class="text-md-left">{{ props.props.item.quotes }}</td>
                            <td class="text-md-left">{{ props.props.item.created_at }}</td>
                            <td>
                            <v-tooltip left>
                                <v-btn fab dark small color="cyan" slot="activator" @click="editQuotes(props.props.item)">
                                    <v-icon small dark>edit</v-icon>
                                </v-btn>
                                <span>Edit</span>
                            </v-tooltip>
                            <v-tooltip right>
                                <v-btn fab dark small color="red" slot="activator" @click="delQuote(props.props.item)">
                                    <v-icon small dark>delete</v-icon>
                                </v-btn>
                                <span>Delete</span>
                            </v-tooltip>
                             </td>
                    </template>
                </data-tabel>
        </v-card>
</template>

<script>
import DataTabel from '@/components/DataTable.vue'
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
/*eslint-disable*/
export default {
    data(){
        return{
            'dialog': false,
            'title':'',
            'headers':[
                { text: 'Quote', value: 'quotes', align:'left' },
                { text: 'Created at', value: 'created_at', align:'left' },
                { text: 'Action', value: '', align:'left' },
            ],
            'quote':'',
            statSave:'',
            idQuote: -1,
        }
    },

    created(){
      this.$store.dispatch('fetchQuotes')
    },

    mounted(){
    },

    computed:{
        ...mapGetters([
            'getQuotes'
        ]),
    },

    components:{
        DataTabel : DataTabel
    },

    methods:{
        addQuote(){
            this.dialog =true
            this.title = 'Add Quote'
            this.statSave='add'
            this.quote=''
        },

        saveQuote(val){
            if(this.statSave == 'add'){
                this.$store.dispatch('inputQuotes',this.quote)
                .then(res =>{
                    this.dialog=false
                    Swal.fire(
                    'Data',
                    'Success Add New Data',
                    'success')

                    this.$store.dispatch('fetchQuotes')
                })
                .catch(ex => {
                    Swal.fire(
                    'Data',
                    'Data Failed to Add New',
                    'error')
                })
            }else if(this.statSave == 'edit'){
                let data = {
                    id: this.idQuote,
                    quotes: this.quote
                }
                this.$store.dispatch('updateQuote',data)
                .then(res => {
                    this.dialog=false
                    Swal.fire(
                    'Data',
                    'Data is Updated',
                    'success')
                    this.$store.dispatch('fetchQuotes')
                })
                .catch(ex => {
                    Swal.fire(
                    'Data',
                    'Failed to Update Data',
                    'error')
                })
                
            }
            
        },
        
        editQuotes(val){
            this.$store.dispatch('fetchQuote',val.id)
            .then(res => {
                this.quote = res.data.data.quotes
                this.statSave='edit'
                this.idQuote = res.data.data.id
                // console.log(res.data.data.quotes)
            })
            .catch(ex => {
                // console.log(ex.data)
            })
            this.dialog=true
        },
        
        delQuote(val){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {                        
                        this.$store.dispatch('deleteQuote',val.id)
                        .then(res =>{
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            this.$store.dispatch('fetchQuotes')
                            this.getQuotes.splice(this.getQuotes.indexOf(val),1)
                        })
                        .catch(ex =>{
                            Swal.fire(
                                'Deleted!',
                                'Delete Failed',
                                'error'
                            )
                            // console.log(ex)
                        })
                    }
                })
        }


    }
}
</script>

<style>

</style>

