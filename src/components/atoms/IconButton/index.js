import React from 'react';

function IconButton(props) {
    const { children, ...otherProps } = props
    return (<button style={{ height: 40, width: 40 }} className='br-100 bn c-pointer bg-grey-10 hover:bg-grey-20 t-all' {...otherProps}>{children}</button>)
}
export default IconButton