import React from 'react';

class Featured extends React.Component {

  render() {

    return (
      <div>
		<table className="table table-hover">
			{this.props.featured.map((post, index) => {
				return (
				<tbody key={index}>
					<tr>
					<td>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
					</td>
					</tr>
				</tbody>
				)
			})}
		</table>
      </div>
    );
  }
}

export default Featured;