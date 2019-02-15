<template>
        <v-card>
            <v-card-title><span class="title font-weight-bold">Quotes</span>
            </v-card-title>
                <v-btn round color="primary" dark @click="addQuote">Add Quote</v-btn>
                <br>
                <data-tabel :headers="headers" :items="items" :dialog.sync="dialog" :title="title">
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
                            <td class="text-md-left">{{ props.props.item.name }}</td>
                            <td>
                            <v-tooltip left>
                                <v-btn fab dark small color="cyan" slot="activator" @click="editQuote(props.props.item)">
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
                { text: 'Quote', value: 'name', align:'left' },
                { text: 'Action', value: 'calories', align:'left' },
            ],
            'items':[
                 {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    
                },
            ],

            'quote':'',
            statSave:''
        }
    },

    created(){
        this.$store.dispatch('fetchQuotes')
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
            this.dialog =gitrue
            this.title = 'Add Quote'
            this.statSave='add'
        },

        saveQuote(val){
            if(this.statSave == 'add'){
                this.$store.dispatch('inputQuotes',this.quote)
                .then(res =>{
                    this.dialog=false
                    Swal.fire(
                    'Data',
                    'Berhasil Diinput',
                    'success')
                })
                .catch(ex => {
                    Swal.fire(
                    'Data',
                    'Data gagal Diinput',
                    'error')
                })
            }else if(this.statSave == 'edit'){
                this.$store.dispatch('updateQuote',this.items)
            }
            
        },

        editQuote(val){
            this.$store.dispatch('fetchQuote')
            .then(res => {
                this.quote = val.quote
                this.statSave='edit'
            })
            .catch(ex => {
                console.log(ex.data)
            })
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
                            // this.getBarang.splice(this.getBarang.indexOf(val),1)
                        })
                        .catch(ex =>{
                            Swal.fire(
                                'Deleted!',
                                'Delete Failed',
                                'error'
                            )
                        })
                    }
                })
        }


    }
}
</script>

<style>

</style>

