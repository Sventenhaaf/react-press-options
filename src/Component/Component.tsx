import * as React from 'react'
import Sub from './SubComponent'

interface Props {
  text: string
}

const Component = ({text}: Props) => {
  return (
    <div>
      <h2>COMPONENT: {text}</h2>
      <div>
        <Sub str="str"/>
      </div>
    </div>
  )
}

export default Component