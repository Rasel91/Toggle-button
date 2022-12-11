import React, { useState } from 'react';
// Deep drive it the hook Mir Hossion 27 september video  39 Minits 
const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    console.log(toggle);
    return (
        <div className='text-center mt-4'>
            {toggle && <h1 className='my-3'>Toggle</h1>}
            <button onClick={() => setToggle(!toggle)} type="button" className="btn btn-outline-warning text-center"> {toggle ? "Hide" : "Show"} </button>
        </div>
    );
};

export default Toggle;