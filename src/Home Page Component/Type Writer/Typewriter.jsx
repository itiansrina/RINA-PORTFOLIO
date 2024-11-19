import React from 'react';
import '../Type Writer/writter.css'
import Typewriter from "typewriter-effect";
export default function Writer(){
    return (
        <div className="App">
            <Typewriter
                options={{
                    strings: ['UI Developer', 'Front-End Developer','Problem-Solver'],
                    autoStart: true,
                    loop: true, 
                }}
            />
        </div>
    );
}

