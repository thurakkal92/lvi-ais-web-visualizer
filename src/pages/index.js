import React, { useRef, useEffect, useState, useContext } from 'react';
import { LoadingContext, SidebarContext, TrackerDataContext } from '../context';
import TrackerPage from './TrackerPage';

function Page() {
    const trackerDataContext = useState({ data: [], selectedId: null })
    const loaderContext = useState(false)
    const sidebarContext = useState(true)
    return (
        <TrackerDataContext.Provider value={trackerDataContext}>
            <LoadingContext.Provider value={loaderContext}>
                <SidebarContext.Provider value={sidebarContext}>
                    <TrackerPage />
                </SidebarContext.Provider>
            </LoadingContext.Provider>
        </TrackerDataContext.Provider>
    );
}

export default Page;
