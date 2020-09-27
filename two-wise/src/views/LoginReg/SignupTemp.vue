<template>
    <div class="signup-client">
        <form class="needs-validation signup-form" novalidate>
            <div class="row">
                <div class="col">
                <div class="form-group">
                <label for="InputFirstName">First Name</label>
                <input type="text" class="form-control" id="InputFirstName" aria-describedby="name" placeholder="First Name" v-model="fn">
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="InputLastName">Last Name</label>
                <input type="text" class="form-control" id="InputLastName" aria-describedby="name" placeholder="Last Name" v-model="ln">
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                <label for="InputEmail1">Email address</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email Address" v-model="ea">
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="InputClientID">{{IDtype}}</label>
                <input type="text" class="form-control" id="InputClientID" aria-describedby="emailHelp" :placeholder=placeholder v-model="ci" disabled>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" class="form-control" id="InputPassword" placeholder="Password" v-model="pw">
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="InputPassword">Repeat Password</label>
                <input type="password" class="form-control" id="InputPassword" placeholder="Repeat Password" v-model="rpw">
                </div>
                <p v-if="pw && rpw !== null && pw === rpw">
                    Password Matches!
                </p>
                <p v-if="pw !== rpw">
                    Password doesn't match!
                </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                <label for="InputFirstName">Business Name</label>
                <input type="text" class="form-control" id="InputFirstName" aria-describedby="name" placeholder="Business Name" v-model="bn">
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="industry-select">Business Type</label>
                <br />
                <select id="industry-select" class="option-select" v-model="bt">
                <option v-for="industry in optionsforindustries" :key="industry">
                    {{industry}}
                </option>
                </select>
                </div>    
                </div>   
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                 <label for="industry-select">Country</label>
                <br />
                <select id="industry-select" class="option-select" v-model="co">
                <option v-for="country in country_names" :key="country">
                    {{country}}
                </option>
                </select>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="gender-select">Gender</label>
                <br />
                <select id="gender-select" class="option-select" v-model="gn">
                <option v-for="gender in optionsforgender" :key="gender">
                    {{gender}}
                </option>
                </select>
                </div>    
                </div>
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                <label for="example-datepicker">Date of Birth</label>
                <b-form-datepicker id="example-datepicker" v-model="dob" class="mb-2" placeholder="Select your Date of Birth"></b-form-datepicker>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <label for="InputMobileNumber">Mobile Number</label>
                <input type="text" pattern="^[0-9]*$" class="form-control" id="InputMobileNumber" aria-describedby="name" placeholder="Mobile Number" v-model="mn">
                </div>
                </div>
            </div>
            <button type="submit" class="btn btn-outline-warning">Sign Up</button>
        </form>
    </div>
</template>

<script> 

import country from '../../assets/countrylist.json';
import industry from '../../assets/industrylist.json';

export default {
    name: 'SignupTemplate',
	props: ['IDtype','placeholder'],
	computed:{
		country_names(){
			return country.optionsforcountries.map((item) => {
				return item.name;
			})
		},
        industry_names(){
            return industry.industries.map((item) => {
                return item.IndustryName;
            })
        }
		},
    data() {
        return{
			pw: '',
            rpw: '',
			dobvalue: '',
			optionsforgender: ['Male','Female','Rather Not To Say'],
			optionsforindustries: ['Aerospace','Airline','Automobile','Accounting','Agriculture & Farming'],
        }
  }
};
</script>

<style scoped>
.signup-client {
    width: 700px;
}
.option-select {
    border-radius: 5px;
    border-color: rgb(200, 200, 200);
    width: 330px;
    height: 40px;
}
</style>