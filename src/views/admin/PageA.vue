<template>
    <div>
        <page :title="title" :content="content">
        </page>         
    </div>
</template>
<script>
import Page from '@/components/Page.vue'

import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            'content':'Laudantium eligendi ut tenetur nesciunt labore qui.',
            'title':'Page Action'
        }
    },

    components:{
        Page : Page
    },

    created(){
        this.$store.dispatch('')
    },

    computed:{
        ...mapGetters([
            'getPageA'
        ]),
    }
}
</script>

<style>

</style>
