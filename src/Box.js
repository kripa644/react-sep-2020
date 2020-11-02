import React from 'react';
import './Box.css';

const Box = (props) => {
    console.log(props);
    console.log(props.style);
    // function classNames(...args) {
    //     let str1 = args.join(' ');
    //     return str1;
    // }

    // let bordered = true;
    // let classes = classNames("Button", {"Bordered": bordered});

    // const extraClasses = props.rounded ? 'Box--rounded' : undefined;
    // let classes = `Box ${extraClasses}`;
    // classes = `${classes} ${props.className}`;

    let classNames = require('classnames');
    let classes = classNames(
        'Box', props.className, {
        'Box--rounded': props.rounded, 
        'Box--rectangle': props.rectangle,
    });
    return <div className={classes}>{props.children}</div>
};

export default Box;