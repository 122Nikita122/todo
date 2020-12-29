<template>
<v-app>
  <Header/>
  <router-view></router-view>
</v-app>
</template>

<script>
import Header from './layouts/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

