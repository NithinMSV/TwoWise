<template>
  <div>
    <loginregtemp />
    <router-view />
  </div>
</template>

<script>
import loginregtemp from './LoginReg/LoginRegTemp';

export default {
  name: "login",
  components: {
    loginregtemp
  }
};
</script>
