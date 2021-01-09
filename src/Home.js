import React from 'react';
import Test from './Test';
import Ctest from './Ctest';
import Gallery from './Gallery';
const Home=()=>{
    return(
        <div>
            <div>Home content Here</div>
            <div> abt tst</div>
           <Test  name="manish agarwal"/>
           <Ctest name="sivanya"/>
           <Gallery/>
        </div>
    )
}
export default Home;