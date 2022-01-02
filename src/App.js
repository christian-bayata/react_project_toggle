import React, { useState, useEffect } from 'react';

const ShowItem = () => {
    const [show, setShow] = useState(false);

    return <>
        <button className="btn btn-primary error-btn" onClick = {() => setShow(!show)}>
            Show/Hide
        </button>
        {show && <Item />}
    </>
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return (() => {
            window.removeEventListener('resize', checkSize);
        })
    }, []);

    return <>
        <div className="item">
            <h1>Window</h1>
            <h4>Size: {size} Px</h4>
        </div>
    </>
};

export default ShowItem