import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


  render() {
  
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        {/* remember to use arrow functions to allow 'this' to work */}
        <button onClick={() => this.setState({ who: 'world'})}>World</button>
        <button onClick={() => this.setState({who: 'friend'})}>Friend</button>
        <button onClick={() => this.setState({who: 'React'})}>React</button>
      </div>

      
    )
  }
}
export default HelloWorld