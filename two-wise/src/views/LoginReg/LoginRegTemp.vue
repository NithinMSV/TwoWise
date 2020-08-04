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
          <div class="client-login" v-if="userpick === 'Member' &&  typepick === 'Client'">
            <p>Client Login</p>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Client ID">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Password">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="divider-top"></div>
            <div class="or-text">or</div>
            <div class="divider-bottom"></div>
            <div id="my-signin2"></div>
          </div>
          <div class="client-signup" v-if="userpick === 'Not a Member' && typepick === 'Client'">
            <p>Sign up as Client</p>
          </div>
          <div class="partner-login" v-if="userpick === 'Member' && typepick === 'Partner'">
            <p>Partner Login</p>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Partner ID">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Password">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="divider-top"></div>
            <div class="or-text">or</div>
            <div class="divider-bottom"></div>
          </div>
          <div class="partner-signup" v-if="userpick === 'Not a Member' && typepick === 'Partner'">
            <p>Sign up as Partner</p>
          </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "loginregtemp",
    components: {
      
    },
    data(){
      return{
        uerpick: '',
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