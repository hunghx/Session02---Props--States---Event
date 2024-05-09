import React, { Component } from 'react'
import Button from './Button'

export default class Student extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {id,name,address,homeTown,sex,dob} = this.props.data
    return (
     <tr>
        <td>{this.props.index}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{dob}</td>
        <td>{sex}</td>
        <td><Button cssClass={'bg-info'}>Xem</Button>
        <Button cssClass='bg-warning'>Sửa</Button>
        <Button cssClass='bg-danger'>Xóa</Button></td>
     </tr>
    )
  }
}
