import React from 'react';
import BlipAnimation from '../atoms/Blip';

function Marker(props) {
    const { selected, ...otherProps } = props
    return (
        <>
            <div className='marker p-relative' {...otherProps} >
                {selected && (
                    <div className='p-absolute t-50p l-50p transform-centre'>
                        <BlipAnimation className='bg-brand' />
                    </div>
                )}
            </div>
        </>
    )
}

export default Marker