// Updated Trending component

import React, { Component } from 'react';
import axios from 'axios';

class Trending extends Component {
  state = {
    trending: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
      .then(res => {
        const trending = res.data;
        this.setState({ trending });
      });
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          {this.state.trending.map((post, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Trending;
