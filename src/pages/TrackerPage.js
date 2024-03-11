import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import { TrackerDataContext, LoadingContext } from '../context'
import { fetchData } from '../utils'
/**
 * 
 * TrackerPage will render Sidebar, Header and MapBox
 */
function TrackerPage() {

    const [ trackerData, setTrackerData ] = useContext(TrackerDataContext)
    const [ loading, setLoading ] = useContext(LoadingContext)

    useEffect(() => {
        setLoading(true)
        fetchData('./data.csv')
            .then((data) => {
                setTimeout(() => {
                    setLoading(false)
                    if (data && data.length > 0) setTrackerData({ ...trackerData, data: [ ...data ] })
                }, 700) //To add loading experience
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    return (
        <>
            <Header />
            <Sidebar />
            <Map />
        </>
    )
}

export default TrackerPage