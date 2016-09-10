
// Pages.js
import React, { Component } from 'react'

class Pages extends Component {
  render() {
    // ใส่สไตล์ไว้กับคลาส .table นำมาใช้กัน table tag
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Title Page#1</td>
            <td>
              <a href='javascript:void(0)'>Show</a>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Pages
