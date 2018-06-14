import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc,dec,stepChanged} from './counterActions'

const Counter = (props) => (
  <div>
    <label>{props.counter.number}</label>
    <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
    <button onClick={props.inc}> INC</button>
    <button onClick={props.dec}>DEC </button>
  </div>
)

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({inc, dec, stepChanged}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Counter)