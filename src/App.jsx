import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderHeader from './OrderHeader';
import OrderType from './OrderType';
import MenuDisplay from './MenuDisplay/MenuDisplay';

function App(){
  return <>
  <OrderHeader/>
  <OrderType/>
  <MenuDisplay/>


  </>
}


export default App;