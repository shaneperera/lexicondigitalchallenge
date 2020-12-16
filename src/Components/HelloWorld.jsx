import React from 'react'

//there are two types of components (Functional base approach (Stateless), Class base approach)
//Use functional + Hooks

//Functional
/*
function HelloWorld(props) {
  return (
    <h1>
      Hello {props.name}
    </h1>
  )
}
*/

//Class
//Main differences: Uses states + Accessing prop must use 'this' keyword because the component is a class
//State =  Javascript object which controls what changes internally within a component. NOTE: Javascript waits until ALL components call setState() in their even handlers before starting to re-render
//States can only be created in a class based component, not a functional one
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.name}
      </h1>
    )
  }
}

export default HelloWorld