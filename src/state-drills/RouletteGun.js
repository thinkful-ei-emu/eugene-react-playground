import React from 'react'


class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      
      chamber: null,
      spinningTheChamber: false,
     }
  }

  static defaultProps = {
    bulletsInChamber: 8
  };
  
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleButtonClick = () => {
    this.setState({ spinningTheChamber: true})
    setTimeout(() => {
      const randomNumber = Math.floor((Math.random() * 8) + 1)

      this.setState({
        chamber: randomNumber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderText() {
    if(this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger!...'
    } else if (this.state.chamber === this.props.bulletsInChamber) {
      return 'Bang!!!'
    } else {
      return 'you are safe!'
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderText()}</p>
        <button onClick= {this.handleButtonClick} >Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun