import React from 'react'

export default class results extends React.Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}