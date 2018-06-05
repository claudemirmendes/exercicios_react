import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
	  <Family lastName='mendes'>
        <Member firstName='avelino'/>
        <Member firstName='claudemir'/>
	  </Family>,
	document.getElementById('app'));