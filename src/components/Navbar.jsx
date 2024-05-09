import React, { Component } from 'react'
import Button from './Button'

export default class Navbar extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <nav className='navbar'>
        <Button onClick={this.props.toggleForm} cssClass='bg-primary'>Thêm mới sinh viên</Button>
        <form>
            <input type="text" name="" id="" />
            <Button cssClass='bg-primary'>Tìm kiếm</Button>
        </form>
        <select name="" id="">
            <option value="">Sắp xếp</option>
        </select>
      </nav>
    )
  }
}
