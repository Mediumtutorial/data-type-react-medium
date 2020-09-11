import React, { Component } from 'react'
import xtype from 'xtypejs'
import axios from 'axios'

//Example 1 (Basic)
console.log(xtype(new Date())) // date
console.log(xtype({})) // empty_object
console.log(xtype({name: "manish"})) // single_prop_object
console.log(xtype({name: "manish", age: 26})) // multi_prop_object
console.log(xtype([])) // empty_array
console.log(xtype([1])) // single_elem_array
console.log(xtype([1, 2])) // multi_elem_array
console.log(xtype(undefined)) //undefined
console.log(xtype(1)) //positive_integer
console.log(xtype(1.1)) //positive_float
console.log(xtype(-1.1)) //negative_float
console.log(xtype(-1)) //negative_integer
console.log(xtype('Hello')) //multi_char_string
console.log(xtype(' ')) //whitespace
console.log(xtype('')) //empty_string
console.log(xtype(NaN)) //nan
console.log(xtype(new Error())) //error
console.log(xtype(/ab+c/i)) //regexp
console.log(xtype(true)) //true
console.log(xtype(false)) //false

//Example 2 (Validate with correct data type)
console.log(xtype.type(new Date())) // date
console.log(xtype.type({})) // object
console.log(xtype.type({name: "manish"})) // object
console.log(xtype.type({name: "manish", age: 26})) // object
console.log(xtype.type([])) // array
console.log(xtype.type([1])) // array
console.log(xtype.type([1, 2])) // array
console.log(xtype.type(undefined)) //undefined
console.log(xtype.type(1)) //number
console.log(xtype.type(1.1)) //number
console.log(xtype.type(-1.1)) //number
console.log(xtype.type(-1)) //number
console.log(xtype.type('Hello')) //string
console.log(xtype.type(' ')) //string
console.log(xtype.type('')) //string
console.log(xtype.type(NaN)) //nan
console.log(xtype.type(new Error())) //error
console.log(xtype.type(/ab+c/i)) //regexp
console.log(xtype.type(true)) //boolean
console.log(xtype.type(false)) //boolean


export default class App extends Component {
  //Example 3 (Checking and validating data)

 constructor(props){
  super(props) 
  this.state = {
     data: []
   }
 }

  async getData (){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    if(xtype.type(res.data) === 'array'){
      this.setState({data: res.data})
    }else{
      console.log(new Error('Something went wrong'))
      this.setState({data: []})
    }
  }

  componentDidMount(){
    this.getData()
  }

  render() {
    return (  
      <div>
        {this.state.data.map(d => <h5 key={d.id}>{d.name}</h5>)}
      </div>
    )
  }
}

