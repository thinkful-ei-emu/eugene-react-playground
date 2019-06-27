import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { count: 0 }
  }

  static defaultProps = {
    step: 1
  }

  handleButtonClick = () => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({ count: this.state.count + this.props.step})
  }


  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button
        //this will allow the console log in handlebuttonclick to work.
        //When adding event listener function to React class, use arrow function to make sure this 
        //is referring to the class instance.
          onClick={this.handleButtonClick}
        >
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter