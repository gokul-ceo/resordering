import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderHeader from './OrderHeader';
import OrderType from './OrderType';
import { MenuItem } from './Itemdiv';

function App(){
  return <>
  <OrderHeader/>
  <OrderType/>
  <MenuItem name={'Idly'} />
  <MenuItem name={'Dosa'}/>
  <MenuItem name={'Pongal'}/>

  </>
}


export default App;