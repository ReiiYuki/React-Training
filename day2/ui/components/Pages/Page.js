
// Page.js
// import PropTypes เข้ามาก่อนครับ
import React, { Component, PropTypes } from 'react'

const Page = ({id,title}) => (
  <tr>
    <th>{id}</th>
    <td>{title}</td>
    <td>
      <a href='javascript:void(0)'>Show</a>
    </td>
  </tr>
)
Page.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Page
