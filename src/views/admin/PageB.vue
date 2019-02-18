<template>
    <div>
        <page :title="getPageB.nama" :content="getPageB.content" :page="2">
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
        this.$store.dispatch('fetchPageB')
    },

    computed:{
        ...mapGetters([
            'getPageB'
        ]),
    }
}
</script>

<style>

</style>
