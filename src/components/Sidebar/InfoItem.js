import React from 'react';

function InfoItem(props) {
    const { label, value } = props
    return (
        <div className='flex flex-center flex-between px-1 py-2 bb bc-grey-20'>
            <p className='fs-body fw-600 c-text-light'>{label}</p>
            <p className='fs-body fw-600 c-text-dark tt-capitalize'>{value}</p>
        </div>
    )
}

export default InfoItem