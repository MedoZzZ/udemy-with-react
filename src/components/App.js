import React from "react";
import Header from './Header';
import Course from './Course';
import Text from './Text';
import Explore from './Explore';
function App(){
    return(
        <div className="courses">
            <Header/>
            <Text/>
            <Explore/>
            <div className="c">
                
                <Course/>
            </div>
        </div>
    );
}

export default App