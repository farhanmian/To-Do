import React from 'react';
import classes from './Main.module.css';

function Main(props) {
    return (
        <div className={classes.Main}>
            <h1>To-Do App</h1>
            {props.children}
        </div>
    );
}

export default Main;