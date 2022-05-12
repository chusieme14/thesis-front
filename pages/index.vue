<template>
  <v-row justify="center" class="newsfeed">
    <v-col cols="12" sm="8" md="6">
      <v-card class="d-flex">
        <div class="announcements"> 
          <div v-for="post in posts" :key="post.id" class="post">
            <div class="post-accnt d-flex ">
              <div class="d-flex">
                <!-- <v-avatar
                size="35">
                <img src="/my-day.jpg">
              </v-avatar>
              <div class="d-flex align-center ml-2">
                <p>Marvel</p>
              </div> -->
              </div>
              <div class="">
                <a href="#">...</a>
              </div>
            </div>
            <div>
              <img :src="imageUrl+post.image">
            </div>
            <div class="captions">
                <!-- <div class="mb-2 icons">
                  <a href="#"><v-icon>mdi-heart-outline</v-icon></a>
                  <a href="#"><v-icon>mdi-chat-outline</v-icon></a>
                  <a href="#"><v-icon>mdi-share-variant-outline</v-icon></a>
                </div> -->
                
                <div>
                  <p>{{post.title}}</p>
                  <p class="post-desc">{{post.description}}</p>
                  <button @click="showPost(post)">View more</button>
                </div>
            </div>
          </div>

        </div>
        <div class="right-col">
           <div class="user text-center">
              <div class="for-user">
                 <div>
                   <v-avatar size="65">
                     <v-img :src="imageUrl+$auth.user.avatar"></v-img>
                   </v-avatar>
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
    <v-dialog
        v-model="showpost"
        hide-overlay
        width="1000"
    >
      <view-post
        :data="selectedPost"
        :imageUrl="imageUrl"
      />
    </v-dialog>
  </v-row>
</template>
<script>
import viewPost from '~/components/view-post.vue'
export default {
  components: { viewPost },
  middleware: 'auth',
  data(){
    return {
      imageUrl:process.env.imageUrl,
      posts:[],
      showpost:false,
      selectedPost:{}
    }
  },
  methods:{
    logout(){
      this.$auth.logout()
    },
    getAllPost(){
      this.$axios.get(`posts`).then(({data})=>{
        this.posts = data.data
        console.log(this.posts,"posts")
      })
    },
    showPost(post){
      this.showpost = true
      Object.assign(this.selectedPost, post)
      console.log(post,"test post")
    }
  },
  created(){
    this.getAllPost()
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
    }

    .user-name p:first-child {
      color: #262626;
    }

    .name {
      color: #8e8e8e;
    }

    @media(max-width: 480px) {
      .right-col {
        display: none;
      }

      .announcements {
        margin-right: 0px;
      }
    }

</style>
