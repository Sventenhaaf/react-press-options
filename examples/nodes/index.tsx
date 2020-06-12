import * as React from 'react'
import * as ReactDom from 'react-dom'
import Component from '../../src'

const ROOT = document.getElementById('root')

const styles = {
  container: {
    fontFamily: 'arial'
  },
  button: {
    background: '#0000ff44',
    width: 300,
    height: 100,
  }
}

const Button = () => {
  return (
    <div style={styles.button}>
      <div>BUTTON</div>
    </div>
  )
}

ReactDom.render(
  <div style={styles.container}>
    <h1>Example app</h1>
    <Component text="some text" Button={Button} />
  </div>, ROOT
)
