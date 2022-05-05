<template>
  <v-row justify="center" class="newsfeed">
    <v-col cols="12" sm="8" md="6">
      <v-card class="d-flex">
        <div class="announcements"> 
          <div class="my-day">
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/thor.jpg"></v-avatar>
        
                <p>Thor</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/loki.jpg"></v-avatar>
        
                <p>Loki</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/spider-man.jpg"></v-avatar>
        
                <p>Spider</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/iron-man.jpg"></v-avatar>
        
                <p>Iron-man</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/strange.jpg"></v-avatar>
        
                <p>Strange</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/hulk.jpg"></v-avatar>
        
                <p>Hulk</p>
            </div>
            <div class="myday-one">
                <v-avatar
                size="70"
                > <img src="/captain.jpg"></v-avatar>
        
                <p>captain</p>
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
            <div class="post-accnt d-flex ">
              <div class="d-flex">
                <v-avatar
                size="35">
                <img src="/my-day.jpg">
              </v-avatar>
              <div class="d-flex align-center ml-2">
                <p>Marvel</p>
              </div>
              </div>
              <div class="">
                <a href="#">...</a>
              </div>
            </div>
            <div>
              <img src="/sample.jpg">
            </div>
            <div class="captions">
                <div class="mb-2 icons">
                  <a href="#"><v-icon>mdi-heart-outline</v-icon></a>
                  <a href="#"><v-icon>mdi-chat-outline</v-icon></a>
                  <a href="#"><v-icon>mdi-share-variant-outline</v-icon></a>
                </div>
                
                <div>
                  <p>142,614 likes</p>
                  <p class="post-desc">natgeo Photos and video by @renan_ozturk | I chronicled a National Geographic expedition that made an "elevational transect" in the Upper Paikwa River Basin, near Guyana’s border with Brazil and Venezuela. The goal: help biologist Bruce Means scale a tepui (a mesa-like mountain) to look for new species of amphibians and reptiles in one of the world’s richest and least explored hot spots of biodiversity. The final stage of our journey led us through a pristine cloud forest and culminated with a first ascent up 7,000-foot (2,100 m) Mount Weiassipu. The expedition is the subject of the magazine's April cover story.</p>
                  <button>View all 644 comments</button>
                  <p class="post-time">17 HOURS AGO</p>
                </div>
            </div>
          </div>

        </div>
        <div class="right-col">
           <div class="d-flex user">
              <div class="d-flex for-user">
                 <div>
                <v-icon>mdi-account-circle</v-icon>
                </div>  
                <div class="ml-3 user-name">
                  <p>{{$auth.user.email}}</p>
                  <p class="name">{{$auth.user.fullname}}</p>
                </div>
              </div>
              <div class="for-logout">
                <v-btn text @click="logout">Switch</v-btn>
              </div>
          </div>
        </div>
      </v-card>

    </v-col>
  </v-row>
</template>
<script>
export default {
  middleware: 'auth',
  data(){
    return {
      
    }
  },
  methods:{
    logout(){
      this.$auth.logout()
    }
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

<style>

    .newsfeed {
      margin-top: 20px;
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

    .myday-one img {
          object-fit: cover;
    }

    .myday-one .v-avatar {
      padding: 2px;
      display: initial;
      background-color: #c9d2db;
    }

    .myday-one p {
      font-size: 14px;
      margin-bottom: 0;
      margin-top: 5px;
    }

    .post {
      border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .post img {
      width: 100%;
    }

    .post-accnt {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      justify-content: space-between;
    }
    
    .post-accnt a {
      font-size: 25px;
      color: #000;
      text-decoration: none;
    }

    .post-accnt p {
      margin-bottom: 0;
    }

    .right-col {
      width: 32%;
      padding-top: 3%;
      padding-right: 2%;
  }

    .post p {
      font-size: 14px;
    }

    .captions {
      padding-left: 15px;
      padding-right: 15px;
    }

    .captions i {
      color: #000 !important;
    }

    .captions .icons a {
      text-decoration: none;
    }

    .post button {
      color: #8e8e8e;
    }

    .post-desc {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      display: -webkit-box;
    }

    .post-time {
      font-size: 12px;
    }

    .right-col i {
      font-size: 50px !important;
    }

    .right-col p {
      margin-bottom: 0;
      font-size: 14px;
    }

    .right-col .user {
      align-items: center;
      justify-content: space-between;
    }

    .right-col .user a {
      font-size: 14px;
      text-decoration: none;
    }

    .user-name {
      padding-top: 5px;
    }

    .user-name p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 45%;
    }

    .user-name p:first-child {
      color: #262626;
    }

    .user .for-user {
      width: 67%;
    } 

    .user .for-logout {
      width: 30%;
    }

    .name {
      color: #8e8e8e;
    }

</style>
