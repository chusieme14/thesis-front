<template>
  <v-row justify="center" class="newsfeed">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <div class="announcements"> 
          <div class="my-day">
            <div class="myday-one">
                <v-avatar
                  color="primary"
                  size="56"
                > <img src="https://mydubplate.checkmy.dev/wp-content/uploads/2022/04/disque-vinyle-personnalise-unite-1.png"></v-avatar>
        
                <p>test</p>
            </div>
          </div>

          <div class="post">
            
            <div>
              <img src="/sample.jpg">
            </div>
          </div>

        </div>
      </v-card>
    </v-col>
  </v-row>
</template>


<style>

    .newsfeed {
      margin-top: 45px;
    }

    .announcements {
      padding-top: 30px;
      margin-right: 28px;
      max-width: 614px;
      width: 100%;
      background: transparent;
      width: 100%;
    }

    .my-day {
      background: #fff;
      padding-left: 15px;
      border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .myday-one {
      width: 70px;
      text-align: center;
    background: blue;
    }

    .post img {
      margin-top: 30px;
      width: 100%;
    }

</style>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{

  },
  head(){
    return {
      title:'Home',
      meta:[
        {
          hid:"description",
          name:"description",
          content:"this is the home page"
        }
      ]
    }
  }
}
</script>
