import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0,
      content:{}
    }
  }

  //To update the date-time every second, we use setInterval with its second argument for milliseconds.
  componentDidMount() {
  
    this.interval = setInterval(() => {
    
      // setState method takes an object that the component will then merge with the existing state.
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }



  componentChangeContent() {
    if (this.state.count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (this.state.count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }


  render() {
  
    return (
      <div>
        <p>hello{this.componentChangeContent()}</p>
      </div>

      
    )
  }
}
export default Bomb