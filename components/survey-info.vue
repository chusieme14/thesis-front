<template>
    <v-card>
        <v-card-title>Educational Informations</v-card-title>
        <v-card-text>
            <v-autocomplete
                :items="incomes"
                item-value="id"
                item-text="value"
                v-model="payload.detail.income"
                label="Gross monthly income"
                attach
            >
            </v-autocomplete>
            <v-autocomplete
                :items="time_jobs"
                v-model="payload.detail.time_jobs"
                label="Time to get the job"
                item-text="value"
                item-value="id"
                attach
            >
            </v-autocomplete>
            <v-autocomplete
                :items="booleanOptions"
                v-model="payload.detail.curriculum"
                label="Relevance of the curriculum"
                item-text="name"
                item-value="id"
                attach
            >
            </v-autocomplete>
            <v-autocomplete
                :items="booleanOptions"
                v-model="payload.detail.promotion"
                label="Have you been promoted after graduation?"
                item-text="name"
                item-value="id"
                attach
            >
            </v-autocomplete>
            <!-- <v-autocomplete
                v-model="payload.batch"
                :items="years"
                hide-details="auto"
                :menu-props="{'background-color':'#777'}"
                filled
                dense
                attach
            ></v-autocomplete> -->
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="update" color="success">Save</v-btn>
        </v-card-actions>
        <v-snackbar
            :timeout="-1"
            v-model="issuccess"
            tile
            color="success"
        >
        Change already save
        </v-snackbar>
    </v-card>
</template>

<script>
  export default {
      data(){
        return{
            
            courses: [],
            payload:{
                detail:{}
            },
            issuccess:false
        }
      },
      methods:{
            update(){
                if(this.$route.params.code && this.$route.params.code!=this.$auth.user.share_code) {
                    this.payload.code = this.$route.params.code
                }
                this.$axios.put(`graduates/${this.payload.id}`, this.payload).then(({data})=>{
                    this.issuccess = true

                    setTimeout(() => {
                        this.issuccess = false
                    }, 3000);
                })
            },
            getGraduate(){
                this.$axios.get(`graduates/${this.$auth.user.id}`).then(({data})=>{
                    this.payload = data
                    if(this.payload.detail==null) this.payload.detail = {}
                })
            }
      },
      created(){
          this.getGraduate()
      },
      computed:{
            years(){
                let schoolYear = []
                let year = new Date().getFullYear()
                let startYear = year - 10
                for (let start = year-1; start >= startYear; start--) {
                    schoolYear.push(`${start}-${start+1}`)
                }
                return schoolYear
            }
      }
  }
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }

    .educ-attainment,
    .examp-pass,
    .employ,
    .course,
    .graduated {
        margin-bottom: 30px;
    }

    .award,
    .section {
        margin-bottom: 40px;
        margin-top: -10px;
    }
</style>