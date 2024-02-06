import React from 'react';

const Featured = ({ featured }) => (
  <div>
    <table className="table table-hover">
      {featured.map(({ title, body }, index) => (
        <tbody key={index}>
          <tr>
            <td>
              <h4>{title}</h4>
              <p>{body}</p>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
);

export default Featured;
