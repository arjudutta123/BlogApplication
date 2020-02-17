import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar'


const Blog = props => (
  <tr>
    <td>{props.blog.username}</td>
    <td>{props.blog.description}</td>
    <td>{props.blog.title}</td>
    <td>{props.blog.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.blog._id}>edit</Link> | <a href="#" onClick={() => { props.deleteblog(props.blog._id) }}>delete</a>
    </td>
  </tr>
)

export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this)

    this.state = {blog: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/blog/')
      .then(response => {
        this.setState({ blog: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBlog(id) {
    axios.delete('http://localhost:3000/blog/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      blog: this.state.blog.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blog.map(currentblog => {
      return <BlogList blog={currentblog} deleteBlog={this.deleteBlog} key={currentblog._id}/>;
    })
  }

  render() {
    return (
      <div>
          <NavBar />
        <h3>Logged Blog</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.blogList() }
          </tbody>
        </table>
      </div>
    )
  }
}