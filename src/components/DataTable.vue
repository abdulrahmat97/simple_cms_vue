<template>
    <v-content>
        <v-dialog v-model="dialog"
        persistent
        max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">{{title}}</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm6 md8>
                            <v-form>
                            <slot name="form"></slot>
    
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <slot name="button"></slot>
            </v-card-actions>
        </v-card>
        </v-dialog>
        <v-data-table>
            <template slot="items" slot-scope="props">
                <slot name="field"></slot>
            </template>
        </v-data-table>
    </v-content>
</template>

<script>
export default {
    props:['dialog','title'],
    watch:{
        dialog(val) {
            this.$emit('update:dialog',val) 
        },
    }
}
</script>

<style>

</style>
