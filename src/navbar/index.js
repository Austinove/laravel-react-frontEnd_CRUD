import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { loginFailure} from "../actions/login"

class navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: ""
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handlelogout=()=>{
        this.props.loginFailure()
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        this.setState({
            isLoading: this.props.isLoading
        })
    }

    render(){
        const { activeItem } = this.state;
        return (
            <div>
                <Menu>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >
                        <Link to="/login">Login</Link>
                    </Menu.Item>

                    <Menu.Item
                        name='posts'
                        active={activeItem === 'posts'}
                        onClick={this.handleItemClick}
                    >
                        <Link to="/">Post Something</Link>
                    </Menu.Item>

                    <Menu.Item
                        position="right"
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handlelogout}
                    >
                        logout
                    </Menu.Item>
                </Menu>
                <br/>
            </div>
        )
    }
    
}
const mapStateToProps =(state)=>{
    const {isLoading} = state.login
    return{isLoading}
}
export default connect(mapStateToProps, { loginFailure}) (navbar)