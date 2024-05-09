import React, { Component } from 'react'
import Button from './Button'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {
                id: "",
                name: "",
                dob: "",
                sex: "",
                address: "",
                homeTown: ""
            }
        }
        this.onchangeInput = this.onchangeInput.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    } 
    onchangeInput = (e) => {
        let name = e.target.id;
        let value = e.target.value;
        this.setState({
            ...this.state, student: { ...this.state.student, [name]: value }
        })
        console.log({ name, value });
    
    }
    handleSubmitForm=()=>{
        this.props.getStudent(this.state.student)
    }
    render() {   
        console.log(this.state.student);
        let { id, name, sex, dob, address, homeTown } = this.state.student;
        return (
            <form className='form' >
                <h2 className='title-table'>Thông tin sinh viên</h2>
                <div>
                    <label htmlFor="id">Mã sinh viên</label>
                    <input type="text" id="id" value={id} onChange={(e) => this.onchangeInput(e)} />
                </div>
                <div>
                    <label htmlFor="name">Tên Sinh viên</label>
                    <input type="text" id="name" value={name} onChange={(e) => this.onchangeInput(e)} />
                </div>
                <div>
                    <label htmlFor="sex" >Giới tính</label>
                    <input type="text" id="sex" value={sex} placeholder='Nam' onChange={(e) => this.onchangeInput(e)} />
                </div>
                <div>
                    <label htmlFor="dob">Ngày sinh</label>
                    <input type="text" id="dob" value={dob} placeholder='dd/MM/yyyy' onChange={(e) => this.onchangeInput(e)} />
                </div>
                <div>
                    <label htmlFor="bornIn">Nơi sinh</label>
                    <input type="text" id="homeTown" value={homeTown} placeholder='Ha Noi' onChange={(e) => this.onchangeInput(e)} />
                </div>
                <div>
                    <label htmlFor="address">Địa chỉ</label>
                    <input type="text" id="address" value={address} onChange={(e) => this.onchangeInput(e)} />
                </div>
                <Button onClick={this.handleSubmitForm} cssClass='bg-primary'>Thêm</Button>
            </form>
        )
    }
}
