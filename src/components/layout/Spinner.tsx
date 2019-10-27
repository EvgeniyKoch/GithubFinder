import React from 'react';
// @ts-ignore
import spinner from './spinner.gif';

const Spinner = () => (
    <>
        <img
            src={spinner}
            alt="loading..."
            style={{ width: '200px', margin: 'auto', display: 'block' }}
        />
    </>
);

export default Spinner;
