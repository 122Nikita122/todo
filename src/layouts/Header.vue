<template>
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar">
        <router-link class="navbar_item" to="/">
            home
        </router-link>
        <router-link class="navbar_item" to="/todo">
            todo
        </router-link>
        <router-link class="navbar_item" to="/about">
            about
        </router-link>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>
  .navbar{
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .navbar_item{
    color: black !important;
    text-decoration: none;
    font-size: 20px;
  }
</style>