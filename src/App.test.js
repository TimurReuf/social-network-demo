import React from 'react';
import TimurReufAPP from "./App";
import ReactDOM from 'react-dom'


test('renders without crashing',() =>{
  const div = document.createElement('div')
  ReactDOM.render(<TimurReufAPP/>,div)
  ReactDOM.unmountComponentAtNode(div)
})

