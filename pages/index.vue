<template>
  <v-row justify="center" class="newsfeed">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <div class="announcements"> 
          <div class="my-day">
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/my-day.jpg"></v-avatar>
        
                <p>test</p>
            </div>
          </div>

          <div class="post">
            <div class="post-accnt">
              <v-avatar
                size="35">
                <img src="/my-day.jpg">
              </v-avatar>
            </div>
            <div>
              <img src="/sample.jpg">
            </div>
            <div>
                <div>
                  <v-icon>mdi-heart-outline</v-icon>
                  <v-icon>mdi-chat-outline</v-icon>
                  <v-icon>mdi-share-variant-outline</v-icon>
                </div>
                
                <div>
                  <p>142,614 likes</p>
                  <p>natgeo Photos and video by @renan_ozturk | I chronicled a National Geographic expedition that made an "elevational transect" in the Upper Paikwa River Basin, near Guyana’s border with Brazil and Venezuela. The goal: help biologist Bruce Means scale a tepui (a mesa-like mountain) to look for new species of amphibians and reptiles in one of the world’s richest and least explored hot spots of biodiversity. The final stage of our journey led us through a pristine cloud forest and culminated with a first ascent up 7,000-foot (2,100 m) Mount Weiassipu. The expedition is the subject of the magazine's April cover story.</p>
                  <button>View all 644 comments</button>
                  <p>17 HOURS AGO</p>
                </div>
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
      padding-top: 10px;
      padding-bottom: 10px;
      background: #fff;
      padding-left: 15px;
      display: flex;
      margin-bottom: 30px;
      overflow-x: auto;
      border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .my-day::-webkit-scrollbar {
      display: none;
    }

    .myday-one {
      width: 70px;
      margin-right: 15px;
      text-align: center;
    }

    .myday-one .v-avatar {
      padding: 2px;
      display: initial;
      background-color: #c9d2db;
    }

    .myday-one p {
      margin-bottom: 0;
    }

    .post {
      border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .post img {
      width: 100%;
    }

    .post-accnt {
      padding-left: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
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
