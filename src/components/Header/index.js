import React, { useContext, useState } from 'react';
import { ReactComponent as DoubleArrowRight } from "../../assets/images/double-arrow-right.svg";
import { SidebarContext } from '../../context';
import IconButton from '../atoms/IconButton';

function Header() {
    const [ show, setShow ] = useContext(SidebarContext)
    return (
        <div className='h-13 bg-white p-fixed t-0 w-100p z-10 flex flex-middle px-4 bb bw-1 bs-border bc-grey-10'>
            <IconButton onClick={() => setShow(!show)}>
                <DoubleArrowRight className={show ? '' : 'rotate-180'} height={24} width={24} />
            </IconButton>
            <div className='pr-4' />
            <img height={33} src='https://spire.com/wp-content/themes/spire2021/img/spire-global-cubesat-satellite-logo.svg' />
        </div>
    )
}
export default Header