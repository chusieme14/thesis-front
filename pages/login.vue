<template>
    <div class="login">
        <div>
            <img src="/login-image.png">
        </div>
        <div>
            <div class="login-form">
                <form>
                    <p>Logo</p>
                    <input placeholder="Phone number, username, or email">
                    <input placeholder="Password">
                    <button>Log In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .login {
        display: flex;
        justify-content: center;
        margin: 32px auto 0;
        max-width: 935px;
        padding-bottom: 32px;
        width: 100%;
        /* background-color: #fafafa; */
        height: 100vh;
    }

    .login-form {
        background-color: #fff;
    }

    .login input {
        background: #fafafa;
        background: rgba(var(--b3f,250,250,250),1);
        border: 0;
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        margin: 0;
        outline: 0;
        overflow: hidden;
        padding: 9px 0 7px 8px;
        text-overflow: ellipsis;
    }
</style>