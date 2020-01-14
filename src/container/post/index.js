import React, { Component } from 'react'
import {connect} from "react-redux"
import {
    Button,
    Item,
    Form,
    Input,
    TextArea,
    Segment,
} from 'semantic-ui-react'
import { fetchRequest, createRequest, removeRequest, updateRequest} from "../../actions/post"
class post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            isLoading: "",
            postData: ""
        }
        this.handleChange = this.handleChange.bind()
    }

    componentDidMount(){
        this.props.fetchRequest();
        this.getData();
    }

    getData=()=>{
        this.setState({
            ... this.state,
            postData: this.props.postData
        })
    }
    handleChange = (e, data ) => {
        this.setState({
            ...this.state,
            [data.name]: data.value
        });
    }

    submitPost=()=>{
        const postData = {
            "title": this.state.title,
            "body": this.state.body
        }
        this.props.createRequest(postData);
        
    }

    render() {
        return (
            <div>
                <Segment>
                    <Form>
                        <Form.Field
                            name="title"
                            control={Input}
                            label='Title'
                            placeholder='User Name'
                            onChange={this.handleChange}
                        />
                        {/* <label>Post Picture</label> */}
                        {/* <input type="file"/> */}
                        <Form.Field
                            name="body"
                            control={TextArea}
                            label='Your Post'
                            placeholder='Tell us more about you...'
                            onChange={this.handleChange}
                        />
                        <Form.Field control={Button} onClick={this.submitPost}>Submit</Form.Field>
                    </Form>
                </Segment>
                <br/>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src='/images/wireframe/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Header</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                asdfasdggegweagr
                            </Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image size='tiny' src='/images/wireframe/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Header</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                sgaewgadsaefweagea
                            </Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    const { isLoading, postData, error} = state.posts
    return { isLoading, postData, error }
}
export default connect(mapStateToProps, { fetchRequest,
     createRequest, 
     removeRequest, 
     updateRequest 
    }) (post)
