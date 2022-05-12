<template>
    <div class="header">
        <div class="inner-header">
            <div class="logo">
                <v-img @click="$router.push({path:'/'})" width="65" src="/logo.png"></v-img>
            </div>
            <div class="search">
                <!-- <input placeholder="Search"> -->
            </div>
            <div class="header-icons text-right">
                <v-icon @click="$router.push({path:'/'})">mdi-home</v-icon>
                <!-- <v-icon>mdi-heart-outline</v-icon> -->
                <v-icon @click="$router.push({path:'/profile'})">mdi-account-circle</v-icon>
                <div class="for-logout">
                <v-btn text @click="logout">Switch</v-btn>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$auth.logout()
        },
    }
}
</script>

<style>
    .header {
        height: 60px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background: #fff;
        z-index: 99;
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .inner-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 975px;
        padding: 0 20px;
        width: 100%;
        z-index: 10;
        margin: auto;
        height: 60px;
        transition: height .2s ease-in-out;
    }

    .search input {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        height: 36px;
        min-width: 125px;
        width: 268px;
        background: #efefef;
        border-radius: 8px;
        padding: 0 20px;
    }

    .search input:focus-visible {
        outline: none;
    }

    .search {
        -webkit-box-flex: 1;
        flex: 0 1 auto;
    }

    .logo {
        -webkit-box-flex: 1;
        flex: 1 0 127px;
    }

    .header-icons {
        flex: 1 0 127px;
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 127px;
        -ms-flex: 1 0 127px;
        display: flex;
        justify-content: end;
    }

    .header-icons i {
        font-size: 30px !important;
        margin-left: 10px;
    }

    .header .for-logout {
        display: none;
    }

    @media(max-width: 480px) {
        .search {
            display: none;
        }

        .header-icons button {
            margin-left: 10px;
        }

        .header .for-logout {
            display: block;
        }
    }

</style>