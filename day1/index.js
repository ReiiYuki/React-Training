
import React, { Component } from 'react'
import { render } from 'react-dom'

// import สไตล์เข้ามาในชื่อ styles
import styles from './styles.scss'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        {/* ให้ข้อความของเราประยุกต์สไตล์ของคลาส greeting แบบเฉพาะจุด */}
        <h1 className={styles.greeting}>Hello World</h1>
      </div>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))
