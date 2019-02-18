<template>
    <div>
        <page :title="getPageD.nama" :content="getPageD.content" :page="4">
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
        this.$store.dispatch('fetchPageD')
    },

    computed:{
        ...mapGetters([
            'getPageD'
        ]),
    }
}
</script>

<style>

</style>
