import React from 'react';
import Toolbar from './../../components/Toolbar/Toolbar';
import Auxiliary from './../Auxiliary/Auxiliary';
import MapArea from './../../components/MapArea/MapArea';

const layout = () => (
  <Auxiliary>
    <Toolbar/>
    <MapArea/>
    {/* <Toolbar/> */}
  </Auxiliary>
  
);

export default layout;