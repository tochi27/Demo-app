import React, { Component } from 'react'
import Userinfo from './UserInfo/Userinfo'


class App extends Component{

  state = {
    persons: [
      {firstname: "Steve", lastname: "Donald", emailaddress: "donaldsteve@gmail.com", phonenumber: "07153425667"},
      {firstname: "Matthew", lastname: "Smith", emailaddress: "smithmatthew@gmail.com", phonenumber: "08193654886"},
      {firstname: "Henry", lastname: "Purple", emailaddress: "purplehenry@gmail.com", phonenumber: "08176664387"},
      {firstname: "Jonathan", lastname: "Johnson", emailaddress: "johnsonjonathan@gmail.com", phonenumber: "08143256774"},
      {firstname: "Brian", lastname: "Philip", emailaddress: "philipbrian@gmail.com", phonenumber: "09154762554"}
    ]
  }

  render(){
    return(
      <div>
        <Userinfo firstname= {this.state.persons[0].firstname} lastname= {this.state.persons[0].lastname} emailaddress= {this.state.persons[0].emailaddress} phonenumber= {this.state.persons[0].phonenumber} ></Userinfo>
        <Userinfo firstname= {this.state.persons[1].firstname} lastname= {this.state.persons[1].lastname} emailaddress= {this.state.persons[1].emailaddress} phonenumber= {this.state.persons[1].phonenumber}></Userinfo>
        <Userinfo firstname= {this.state.persons[2].firstname} lastname= {this.state.persons[2].lastname} emailaddress= {this.state.persons[2].emailaddress} phonenumber= {this.state.persons[2].phonenumber}></Userinfo>
        <Userinfo firstname= {this.state.persons[3].firstname} lastname= {this.state.persons[3].lastname} emailaddress= {this.state.persons[3].emailaddress} phonenumber= {this.state.persons[3].phonenumber}></Userinfo>
        <Userinfo firstname= {this.state.persons[4].firstname} lastname= {this.state.persons[4].lastname} emailaddress= {this.state.persons[4].emailaddress} phonenumber= {this.state.persons[4].phonenumber}></Userinfo>
      </div>
    )
  }
}


export default App;