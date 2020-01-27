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
import MyImage from "./image";
import {BASE_URL} from "../../constants"
import { fetchRequest, createRequest, removeRequest, updateRequest} from "../../actions/post"
class post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            isLoading: "",
            postData: "",
            filename: ""
        }
        this.handleChange = this.handleChange.bind()
    }

    componentDidMount(){
        this.props.fetchRequest();
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.postData!==prevState.postData){
            return {
                postData: nextProps.postData,
                isLoading: nextProps.isLoading
            };
        }
        return null;
    }

    handleFile=(e)=>{ 
        this.setState({
            ...this.state,
            filename:e.target.files[0]
        })
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    submitPost=()=>{
        console.log('file', this.state.filename);
        const postData = new FormData();
        postData.append("title", this.state.title)
        postData.append("body", this.state.body)
        postData.append("image", this.state.filename)
        this.props.createRequest(postData);
        
    }
    // deletePost=(id)=>{
    //     this.props.removeRequest(id)
    // }

    render() {
        return (
            <div>
                <div class="columns">
                    <div class="column is-two-fifths">
                        <section class="section">
                            <div className="container">
                                <Form>
                                    <div className="field">
                                        <label className="label">Title</label>
                                        <div className="control">
                                            <input className="input"
                                            name="title"
                                            type="text" 
                                            placeholder="Enter Title" 
                                            onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Body</label>
                                        <div className="control">
                                            <textarea className="textarea" 
                                            type="text"
                                            name="body" 
                                            placeholder="Enter Body of Post" 
                                            onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <input type="file" name="filename" onChange={this.handleFile}/>
                                    </div>
                                    <Form.Field control={Button} onClick={this.submitPost}>Submit</Form.Field>
                                </Form>
                            </div>
                        </section>
                    </div>
                <div class="column">
                    <br/>
                    {this.state.postData.map((_post, index)=>{
                        return(
                            <article className="media" key={index}>
                                <figure className="media-left">
                                    <p className="image is-64x64">
                                        <MyImage image={{
                                            src: `${BASE_URL}/storage/post_images/${_post.image}`,
                                            alt:"My image"
                                        }}
                                            />
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="content">
                                    <p>
                                        <strong>John Smith </strong><small>{_post.created_at}</small>
                                        <br/>
                                            <strong>{_post.title}</strong>
                                        <br/>
                                        {_post.body}
                                    </p>
                                    </div>
                                    <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item">
                                        <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                        </a>
                                        <a className="level-item">
                                        <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                        </a>
                                        <a className="level-item">
                                        <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                        </a>
                                    </div>
                                    </nav>
                                </div>
                                <div className="media-right">
                                    <button className="delete"></button>
                                </div>
                            </article>
                        )
                    })}
                    </div>
                </div>
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
