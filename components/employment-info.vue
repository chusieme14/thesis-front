<template>
  <v-card>
    <v-card-title>Employment Informations</v-card-title>
    <v-card-text>
      <v-autocomplete
        :items="booleanOptions"
        item-value="id"
        item-text="name"
        label="Employed"
        v-model="payload.detail.employed"
      ></v-autocomplete>
      <template>
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
              v-model="payload.detail.employment_date"
              label="Employment date"
              readonly
              v-bind="attrs"
              v-on="on"
              ></v-text-field>
          </template>
          <v-date-picker
              v-model="payload.detail.employment_date"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
          ></v-date-picker>
        </v-menu>
        <v-text-field
          v-model="payload.detail.company_name"
          label="Company name"
        ></v-text-field>
        <v-autocomplete
          v-model="payload.detail.employment_status"
          :items="empStatus"
          label="Employment status"
        >
        </v-autocomplete>
        <v-text-field
          v-model="payload.detail.c_address"
          label="Complete address"
        >
        </v-text-field>
        <v-text-field
          v-model="payload.detail.c_city"
          label="City"
        >
        </v-text-field>
        <v-autocomplete
          v-model="payload.detail.country_id"
          label="Country"
          :items="countries"
          item-text="name"
          item-value="id"
          attach
        >
        </v-autocomplete>
      </template>
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
      return {
        activePicker:null,
        menu:false,
        issuccess:false,
        empStatus:[
          'Permanent',
          'Contractual',
          'Self-employed',
          'Casual',
          'Not Applicable',
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
        payload:{
          detail:{}
        },
        countries:[]
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
      save (date) {
        this.$refs.menu.save(date)
      },
      getCountries(){
          this.$axios.get(`countries`).then(({data})=>{
              this.countries = data.data
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
      this.getCountries()
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
  }
</script>
<style scoped>
    h1 {
        margin-bottom: 30px;
    }
</style>
