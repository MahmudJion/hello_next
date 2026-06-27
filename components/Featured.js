import React from 'react';

const Featured = ({ featured = [] }) => (
  <div>
    {featured.length === 0 ? (
      <p className="text-muted">No featured posts available right now.</p>
    ) : (
      <table className="table table-hover">
        <tbody>
          {featured.map(({ title, body }, index) => (
            <tr key={`${title}-${index}`}>
              <td>
                <h4>{title}</h4>
                <p>{body}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default Featured;
