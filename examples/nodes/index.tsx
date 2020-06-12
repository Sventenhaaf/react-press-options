import * as React from 'react'
import * as ReactDom from 'react-dom'
// NO @ts-ignore
// import Component from '../../build'
import Component from '../../src'


const ROOT = document.getElementById('root')

ReactDom.render(
  <div>
    <h1>Example app</h1>
    <Component text="some text" />
  </div>, ROOT
)