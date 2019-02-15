<template>
    <div>
        <page :title="title" :content="content">
        </page>         
    </div>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
    data(){
        return{
            'content':'Laudantium eligendi ut tenetur nesciunt labore qui.',
            'title':'Page Daily'
        }
    },
    components:{
        Page : Page
    }
}
</script>

<style>

</style>
