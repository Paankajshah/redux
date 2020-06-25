import React , {useState} from 'react'
import { connect } from 'react-redux'
//import { buyCake } from '../redux'

function CakeContainer (props) {

 const [state, setState] = useState(0);

  changeHandler = event => {
      event.preventDefault();
      setState(event.target.value)

  }
  return (
    <div>
      <h2>Number of cakes - {props.pankaj} </h2>
      <input type='text' value={state} onChange={this.changeHandler} />
      <button onClick={() => props.buyCake(state)}>Buy {state} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pankaj: state.cake.numOfCakes
  }
}
console.log();

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (state) => dispatch({
      type: 'BUY_CAKE',
      payload: state
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)