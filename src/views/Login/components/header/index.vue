<script setup lang="ts">
import logo from '@/assets/images/Login/logo.png'
</script>
<template>
    <div class="header">
        <div class="logo">
            <a href="https://www.ecvv.com">
                <img :src="logo"></a>
        </div>
        <div class="sign">
            <ul>
                <li id="menu_userInfo"><a href="javascript:void(0);" rel="nofollow">Already have an account?</a></li>
                <li><span>|</span></li>
                <li id="menu_sign_status"><a href="https://www.ecvv.com/myecvv/login.html" rel="nofollow">Sign In</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.header {
    height: 110px;
    border-bottom: #044069 solid 6px;
    margin-bottom:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.header .logo {
    margin-top: 20px;
}
.header .sign {
    margin-top: 20px;
}
a {
    color: #5d5d5e;
    transition: all 0.3s ease-in-out 0s;
}
a:hover {
    text-decoration: underline;
    color: #3e6ed4;
}
ul{
    padding:0
}
.header .sign li {
    display: inline;
}
span{
    margin:0 10px;
}
</style>