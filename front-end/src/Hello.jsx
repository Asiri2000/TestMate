import React from 'react';

export const Hello = () =>{

    return <div id='hello'> <h1>Hello, World!</h1></div>
}

export const HelloWithoutJsx = () =>{

    return React.createElement('div', {id:'container'}),
   React.createElement('h1',null, 'Hello, World without JSX!');
}