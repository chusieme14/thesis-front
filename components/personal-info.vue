<template>
  <v-card>
    <v-card-title>Personal Informations</v-card-title>
    <v-card-text>
      <v-text-field v-model="payload.first_name" label="First Name"></v-text-field>
      <v-text-field v-model="payload.last_name" label="Last Name"></v-text-field>
      <v-text-field v-model="payload.middle_name" label="Middle Name"></v-text-field>
          
      <v-text-field v-model="payload.email" label="Student Number"></v-text-field>
      <v-text-field v-model="payload.contact_number" label="Contact Number"></v-text-field>
      <v-autocomplete
        v-model="payload.detail.civil_status"
        :items="civil_status"
        label="Civil status"
        attach
      ></v-autocomplete>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
            v-model="payload.detail.birthday"
            label="Birthday date"
            readonly
            v-bind="attrs"
            v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            v-model="payload.detail.birthday"
            :active-picker.sync="activePicker"
            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
        ></v-date-picker>
      </v-menu>
      <v-text-field v-model="payload.detail.residence" label="Location of Residence"></v-text-field>
      <v-autocomplete attach v-model="payload.detail.gender" :items="gender" label="Gender"></v-autocomplete>
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
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="copy" color="success">Copy shared link</v-btn> -->
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

<style scoped>
    .civil-status,
    .gender {
        margin-top: 30px;
    }
</style>


<script>
  export default {
    data: () => ({
      appUrl:process.env.appUrl,
      civil_status: ['Single', 'Married', 'Separated', 'Widowed'],
      gender: [
        'Male',
        'Famale',
        'Transgender',
        'Non-binary',
        'Prefer not to respond',
      ],
      incomes: [
                {
                    id:1,
                    value:'below 5,000'
                },
                {
                    id:2,
                    value:'5,000 - 10,000'
                },
                {
                    id:3,
                    value:'10,000 - 15,000'
                },
                {
                    id:4,
                    value:'15,000 - 20,000'
                },
                {
                    id:5,
                    value:'20,000 - 25,000'
                },
                {
                    id:6,
                    value:'above 25,000'
                },
            ],
            time_jobs: [
                {
                    id:1,
                    value:'Less than a month'
                },
                {
                    id:2,
                    value:'1 - 6 months'
                },
                {
                    id:3,
                    value:'7 - 11 months'
                },
                {
                    id:4,
                    value:'1 - 2 years'
                },
                {
                    id:5,
                    value:'2 - 3 years'
                },
                {
                    id:6,
                    value:'3 - 4 years'
                },
            ],
            booleanOptions:[
                {
                    id:0,
                    name:'No'
                },
                {
                    id:1,
                    name:'Yes'
                }
            ],
      date: null,
      menu: false,
      issuccess: false,
      activePicker:null,
      payload:{
        detail:{
          civil_status:null,
          birthday:null,
          residence:null
        }
      },
      old_payload:{
        detail:{
          civil_status:null,
          birthday:null,
          residence:null
        }
      },
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      copy(){
        navigator.clipboard.writeText(this.appUrl+'/profile/'+this.payload.share_code)
      },
      save (date) {
        this.$refs.menu.save(date)
      },
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
          Object.assign(this.old_payload, this.payload)
        })
      }
    },
    computed:{
      
    },
    created(){
      this.getGraduate()
    }
  }
</script>