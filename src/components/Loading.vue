<template>
<v-layout row justify-center>
  <v-dialog v-model="value" persistent content content-class="centered-dialog" width="100px">
    <v-container fluid>
      <v-layout column justify-center align-center>       
        <half-circle-spinner
          :animation-duration="1000"
          :size="60"
          :color="'#1976D2'"
        />
      </v-layout>
    </v-container>
  </v-dialog>
</v-layout>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    props:['value'],
    components:{
        HalfCircleSpinner
    }
}
</script>

<style>

</style>
