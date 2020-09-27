<template>
    <div class="logtemp">
        <div class="log-container">
        <h3>Account</h3>
        <h6>Select User: </h6>
        <div class="usercheck">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="AAM" name="user" class="custom-control-input" value="Member" v-model="userpick" unchecked>
          <label class="custom-control-label" for="AAM">Already a Member</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="CAA" name="user" class="custom-control-input" value="Not a Member" v-model="userpick" unchecked>
          <label class="custom-control-label" for="CAA">Create an account</label>
        </div>
        </div>
        <h6>Select login type:</h6>
        <div class="logintype">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="client" name="type" class="custom-control-input" value="Client" v-model="typepick" unchecked>
          <label class="custom-control-label" for="client">Client</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="worker" name="type" class="custom-control-input" value="Partner" v-model="typepick" unchecked>
          <label class="custom-control-label" for="worker">Partner</label>
        </div>
        </div>
        <div class="render">
          <template class="client-login" v-if="userpick === 'Member' &&  typepick === 'Client'">
            <p>Client Login</p>
              <LoginTemplate placeholder="Client ID" />
            <div class="divider-top"></div>
            <div class="or-text">or</div>
            <div class="divider-bottom"></div>
          </template>
          <template class="client-signup" v-if="userpick === 'Not a Member' && typepick === 'Client'">
            <p>Sign up as Client</p>
            <SignupTemplate IDtype="Client ID" placeholder="Auto-generated Client ID"/>
          </template>
          <template class="partner-login" v-if="userpick === 'Member' && typepick === 'Partner'">
            <p>Partner Login</p>
            <LoginTemplate placeholder="Partner ID"/>
            <div class="divider-top"></div>
            <div class="or-text">or</div>
            <div class="divider-bottom"></div>
          </template>
          <template class="partner-signup" v-if="userpick === 'Not a Member' && typepick === 'Partner'">
            <p>Sign up as Partner</p>
            <SignupTemplate IDtype="Partner ID" placeholder="Auto-generated Partner ID"/>
          </template>
        </div>
        </div>
    </div>
</template>

<script>

import LoginTemplate from './LoginTemp';
import SignupTemplate from './SignupTemp';

export default {
    name: "loginregtemp",
    components: {
      LoginTemplate,
      SignupTemplate
    },
    data(){
      return{
        userpick: '',
        typepick: '',
        type: ['Member','Not a Member','Client','Partner']
      }
    }
}
</script>

<style scoped>
.logtemp {
    position: relative;
    white-space: nowrap;
}

.log-container{
    position: absolute;
    margin-top: 25px;
    left: 20%;
}

.usercheck {
  position: absolute;
  top: 40%;
  left: 80%;
}
label {
  white-space: nowrap;
}
.logintype {
  position: absolute;
  top: 70%;
  left: 120%;
}
.router-link {
  text-decoration: none;
  color: black;
  overflow-wrap: normal;
  }
.router-link:hover {
  color: black;
}

.router-link:active {
  color: black;
}

.render {
  position: absolute;
  top: 150px;
  left: 100%;
}

.divider-top {
  position: absolute;
  top: 10px;
  left: 150%;
  height: 140px;
  width: 2px;
  background-color: orange;
}

.or-text {
  position: absolute;
  top: 160px;
  left: 147%;
}

.divider-bottom {
  position: absolute;
  top: 200px;
  left: 150%;
  height: 140px;
  width: 2px;
  background-color: orange;
}
</style>