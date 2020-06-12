import * as React from 'react'
// @ts-ignore
import Sub from './SubComponent'

interface Props {
  text: string
}

const Component = ({ text }: Props) => {
  return (
    <div>
      <h2>COMPONENT WITH CUSOMT TEXT: {text}</h2>
      <div>
        <Sub str="string rendered in .js file within component " />
      </div>
    </div>
  )
}

export default Component