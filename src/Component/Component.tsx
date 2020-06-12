/*
TODO:
- animate on mousedown
- wait ... ms
- activate options
- if mouseup before ... ms, regard it as a click and still show the options
*/

import * as React from 'react'
import Options from './Options'

interface Props {
  text: string,
  Button: React.ComponentType
}

const styles = {
  buttonWrapper: {
    border: '1px solid grey',
    display: 'inline-block',
    cursor: 'pointer',
  }
}

const options = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  }
]

const Component = ({ text, Button }: Props) => {
  const [mouseDown, setMouseDown] = React.useState(false)

  const onMouseDown = () => setMouseDown(true)
  const onMouseUp = () => setMouseDown(false)

  const scale = mouseDown ? 0.95 : 1

  return (
    <div>
      <h2>COMPONENT WITH CUSOMT TEXT: {text}</h2>
      <div style={{
        ...styles.buttonWrapper,
        transform: `scale(${scale})`,
        transition: `all 0.5s`,
        background: 'red'
      }} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
        <Button />
      </div>
      {mouseDown && (
        <Options options={options} />
      )}
    </div>
  )
}

export default Component