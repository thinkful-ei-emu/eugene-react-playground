import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  
  }

  //To update the date-time every second, we use setInterval with its second argument for milliseconds.
  componentDidMount() {
  
    this.interval = setInterval(() => {
    
      // setState method takes an object that the component will then merge with the existing state.
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }

  //this will remove the interval when the component is removed from the DOM
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
  
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}
export default TheDate

//Every time setState is called, the React component will re-trigger render. 
//Let's add console.log calls into the constructor, render, componentDidMount and setInterval callback to see the life-cycle in action.