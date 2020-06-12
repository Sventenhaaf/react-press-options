import * as React from 'react'

interface Props {
  options: any
}

interface Option {
  label: string,
  value: string
}

const Options = ({ options }: Props) => {
  return (
    <div>
      <div>OPTIONS:</div>
      <ul>
        {options.map((op: Option) => <li key={op.value}>{op.label}</li>)}
      </ul>
    </div>
  )
}

export default Options