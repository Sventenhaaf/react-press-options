import * as React from 'react'
import * as ReactDom from 'react-dom'
import Component from '../../src'

const ROOT = document.getElementById('root')

ReactDom.render(
  <div>
    <h1>Hello Worldzzz</h1>
    <Component text="jashdgf" />
  </div>, ROOT
  )