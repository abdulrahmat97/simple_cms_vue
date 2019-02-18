<template>
    <div>
        <page :title="getPageA.nama" :content="getPageA.content" :page="1">
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
        this.$store.dispatch('fetchPageA')
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
