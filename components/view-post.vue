<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="5">
                    <v-img :src="imageUrl+data.image">

                    </v-img>
                </v-col>
                <v-col cols="12" sm="7">
                    <h4 class="mt-7">{{data.title}}</h4>
                    <p class="mt-5">{{data.description}}</p>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        data:{},
        imageUrl:{}
    }
}
</script>
<style lang="scss" scoped>

</style>