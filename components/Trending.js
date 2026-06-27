import React, { Component } from 'react';
import axios from 'axios';

class Trending extends Component {
  state = {
    trending: [],
    isLoading: true,
    error: '',
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
      .then((res) => {
        this.setState({
          trending: Array.isArray(res.data) ? res.data : [],
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching trending posts:', error.message);
        this.setState({ error: 'Unable to load trending posts right now.', isLoading: false });
      });
  }

  render() {
    const { trending, isLoading, error } = this.state;

    return (
      <div>
        {isLoading && <p className="text-muted">Loading trending posts...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!isLoading && !error && trending.length === 0 && (
          <p className="text-muted">No trending posts available right now.</p>
        )}
        {!isLoading && !error && trending.length > 0 && (
          <table className="table table-hover">
            <tbody>
              {trending.map((post, index) => (
                <tr key={`${post.title}-${index}`}>
                  <td>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Trending;
