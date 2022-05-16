<template>
    <v-card height="92vh">
        <v-card-title>
            <span class="text-h5">Graduate Informations</span>
            </v-card-title>
        <v-card-text class="main-container">
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step
                        :complete="e1 > 1"
                        step="1"
                    >
                        Personal Information
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        :complete="e1 > 2"
                        step="2"
                    >
                        Educational Information
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        :complete="e1 > 3"
                        step="3"
                    >
                        Employment Information
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <personal 
                            :payload="payload"
                            @cancel="cancel"
                            @next="next"
                        ></personal>
                    </v-stepper-content>
                </v-stepper-items>
                <v-stepper-items>
                    <v-stepper-content step="2">
                        <educational 
                            :payload="payload"
                            @cancel="cancel"
                            @next="next"
                            @prev="prev"
                        ></educational>
                    </v-stepper-content>
                </v-stepper-items>
                <v-stepper-items>
                    <v-stepper-content step="3">
                        <employment 
                            :payload="payload"
                            @cancel="cancel"
                            @save="save"
                            @prev="prev"
                        ></employment>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-card-text>
        <!-- <v-card-actions class="custom-card-action mr-5">
            <v-btn @click="cancel" color="error" class="mr-2">Cancel</v-btn>
            <v-btn @click="save" color="success">Save</v-btn>
        </v-card-actions> -->
        
    </v-card>
</template>
<script>
export default {
    components:{
    },
    props:{
        show:{
            type:Boolean
        },
        details:{

        },
        selected_item:{

        },
        isedit:{
            type:Boolean
        }
    },
    data(){
        return{
            e1:1,
            ismultiple:false,
            payload:{
                image_base64:null,
                prof_exam_passed:'No',
                detail:{}
            },
        }
    },
    methods:{
        next(){
            this.e1 += 1 
        },
        prev(){
            this.e1 -= 1
        },
        preventReload() {
            window.onbeforeunload = function(){
                return "Are you sure you want to refresh the window?, selected file will be removed!";
            }
            this.isimport = false
        },
        cancel(){
            this.reset()
            this.$router.push({name:'login'})
        },
        save(){
            console.log(this.payload,"save payload")
            this.payload.section = this.payload.section.toUpperCase()
            this.$axios.post(`register`,this.payload).then(({data})=>{
                this.$router.push({name:'login'})
            })
        },
        reset(){
            this.isfetching = true
            this.payload.image_base64 = null
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .class-images{
        display: flex;
        justify-content: center;

        .v-image{
            cursor: pointer;
        }
    }
    .image-text-field{
        margin-top: -19px !important;
    }
    .custom-card-action{
        display: flex;
        justify-content: flex-end;
    }
    .main-container{
        max-height: 84vh;
        overflow: auto;
    }
</style>