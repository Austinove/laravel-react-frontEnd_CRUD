import React, { Component } from 'react'
import {connect } from "react-redux"
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
import { loginRequest} from "../../actions/login"

class login extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            userData: "",
            username: "",
            password: ""
        }
        this.handleInput = this.handleInput.bind()
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit=()=>{
        const loginData = {
            "username": this.state.username,
            "password": this.state.password
        };
        this.props.loginRequest(loginData)
    }
    render() {
        return (
            <Segment padded style={{width:"50%"}}>
                <Form>
                    <Form.Field>
                        <label>User Name</label>
                        <input type="text" placeholder='First Name' name="username" onChange={this.handleInput}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" placeholder='............' name="password" onChange={this.handleInput}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Remember me' />
                    </Form.Field>
                    <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Segment>
        )
    }
}
const mapStateToProps=(state)=>{
    const { isLoading, userData, error }= state.login
    return { isLoading, userData, error }
}
export default connect(mapStateToProps, { loginRequest }) (login)
