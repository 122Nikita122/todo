<template>
    <div>
        <div class="navbar is-flex is-justify-content-space-around">
        <router-link class="item" to="/">
            home
        </router-link>
        <router-link class="item" to="/todo">
            todo
        </router-link>
        <router-link class="item" to="/about">
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
    margin-bottom: 15px;
  }
  .item{
    color: black !important;
    text-decoration: none;
    font-size: 20px;
  }
</style>