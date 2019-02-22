<template>
    <div>
        <page :title="getPageC.nama" :content="getPageC.content" :page="3">
        </page>         
    </div>
</template>
<script>
import Page from '@/components/Page.vue'

import { mapGetters } from 'vuex';

export default {
    
    components:{
        Page : Page
    },

    created(){
        this.$store.dispatch('fetchPageC')
    },

    computed:{
        ...mapGetters([
            'getPageC'
        ]),
    }
}
</script>

<style>

</style>
