
// Page.js
// import PropTypes เข้ามาก่อนครับ
import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    // เมื่อเราส่ง page เข้ามาจากภายนอกมันจึงปรากฎเป็น props ของคอมโพแนนท์
    // และเป็นค่าถาวรที่แก้ไขไม่ได้
    const { id, title } = this.props.page

    return (
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <a href='javascript:void(0)'>Show</a>
        </td>
      </tr>
    )
  }
}
