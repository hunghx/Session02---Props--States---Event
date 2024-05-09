import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListStudent from './components/ListStudent'
import Navbar from './components/Navbar'
import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: [
        { id: "S001", name: "Nguyễn Văn A", dob: "11/11/1999", sex: "Nam", address: "Nghệ An", homeTown: "Nghệ An" },
        { id: "S002", name: "Nguyễn Văn B", dob: "11/11/1999", sex: "Nam", address: "Nghệ An", homeTown: "Nghệ An" },
        { id: "S003", name: "Nguyễn Văn C", dob: "11/11/1999", sex: "Nam", address: "Nghệ An", homeTown: "Nghệ An" },
      ],
      isOpen: false,
      action:"ADD"
    }
    this.getStudent = this.getStudent.bind(this)
  }
  getStudent = (data) => {
    this.setState({...this.state,students:[...this.state.students,data]})
  }
  toggleForm=()=>{
    this.setState({...this.state,isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <>
        <div className="container">
          <div className='col-7'>
            <Navbar toggleForm={this.toggleForm}/>
            <ListStudent data={this.state.students} />
          </div>
          <div className='col-5'>
           {this.state.isOpen && <Form getStudent={this.getStudent} />}
           
          </div>
        </div>
      </>
    )
  }
}

export default App
