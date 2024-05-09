import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <div>
        <h2 className='title-table'>Danh sách sinh viên</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên Sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {
                  this.props.data.map((stu,index)=><Student key={stu.id} index={index+1} data={stu}/>)
                }
            </tbody>
        </table>
      </div>
    )
  }
}
