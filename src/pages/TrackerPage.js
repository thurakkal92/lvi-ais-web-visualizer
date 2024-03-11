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
            <div className='container mt-13 pt-15'>
                <h1 className='fs-9 fw-700 pt-10'>AIS Data Analysis for Atlantic Ocean Area</h1>
                <p className='fs-4 pt-2'>Web application to showcase 10 vessels and displays related information.</p>
                <p className='fs-4 pt-2'>Please refer to newly built <a className='c-brand fw-600' href='https://lvi-tracker-spire.netlify.app/' target='_blank'>LVI tracking system</a>.</p>
                <h2 className='fs-7 fw-700 pt-10'>Showcasing vessel position and relevant data</h2>
                <p className='fs-4 pt-2'>Sidebar showcases real time vessel tracking information. It can either be accessed directly from the vessel markers in the map or from the dynamic list in the sidebar. Sidebar can be <b>collapsed/ expanded</b> as per user needs. The associated vessel data will be shown in a sidebar that appears whenever a user hits the markers.</p>
                <p className='fs-4 pt-4 fw-600'>Key insights</p>
                <ul className='pl-8 pt-2'>
                    <li className='py-1'>Vessel name and country flag in the initial view.</li>
                    <li className='py-1'>Vessel moving status.</li>
                    <li className='py-1'>Vessel journey representation.</li>
                    <li className='py-1'>Latest AIS information includes MMSI, IMO, Vessel type, Speed etc.</li>
                </ul>
                <div style={{ height: 300, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url(https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710180618/first_zqa0tq.png)' }} className='bg-grey-10 mt-6 ba bc-grey-10 br-4'></div>


                <p className='fs-4 pt-2 mt-6'>The web application also shows the vessel activity status ie. representing whether it's moving or it's anchored. Green dot represents a moving vessel and grey dot represents an anchored vessel.</p>
                <div style={{ height: 300, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url(https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710181059/Screenshot_2024-03-11_at_11.45.12_PM_ca1osp.png)' }} className='bg-grey-10 mt-6 ba bc-grey-10 br-4'></div>
                <p className='fs-4 pt-2 mt-6'>Graphical representation of the vessels journey from the source to destination with real time AIS information.</p>
                <div style={{ height: 300, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710181212/Screenshot_2024-03-11_at_11.49.38_PM_m1xzmq.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>
                <p className='fs-4 pt-2 mt-6'>The key AIS information captured corresponding to each vessel. Also, Blip animation added to selected Vessel.</p>

                <div style={{ height: 300, width: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: '0 -2px', backgroundImage: 'url(https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710181373/Screenshot_2024-03-11_at_11.52.27_PM_u3ryla.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <h2 className='fs-7 fw-700 pt-10'>How to run the application locally</h2>
                <ul className='pl-8 pt-4'>
                    <li className='py-1'>Clone or download. <a className='c-brand fw-500' href='https://github.com/thurakkal92/lvi-ais-web-visualizer/tree/master' target='_blank'>Code Repo</a></li>
                    <li className='py-1'>Run <code>npm install</code>  and <code>npm run start</code></li>
                </ul>
                <h2 className='fs-7 fw-700 pt-10'>Technologies used</h2>
                <ul className='pl-8 pt-4'>
                    <li className='py-1'>React JS library</li>
                    <li className='py-1'>SCSS for styling</li>
                    <li className='py-1'>Mapbox gl libary</li>
                </ul>

                <h2 className='fs-7 fw-700 pt-10'>Highlights</h2>
                <ul className='pl-8 pt-4'>
                    <li className='py-1'>Using React context for state management. ie, storing vessel information.</li>
                    <li className='py-1'>Predefined CSS classes, "plug and play" ready. ie, all the css properties are accessible via classNames.</li>
                    <li className='py-1'>Reusable components. ie atoms, Header, Map, Sidebar etc.</li>
                </ul>

                <h2 className='fs-7 fw-700 pt-10'>Code structure</h2>

                <p className='fs-4 pt-2 mt-6'><b>1. Pages</b> - Entry point of the application. Includes Context initialisation.</p>
                <div style={{ height: 400, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710182676/Screenshot_2024-03-12_at_12.09.08_AM_dnkeje.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <p className='fs-4 pt-2 mt-6'><b>2. CSS structure</b> - Implemented a utility first system like tailwind css, but purely css driven. Predefined CSS classes are generated using generators.scss based on configuration added in config.scss. </p>
                <div style={{ height: 400, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710183839/Screenshot_2024-03-12_at_12.28.46_AM_scvqlo.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <p className='fs-4 pt-2 mt-6'><b>3. TrackerPage</b> - Retreiving data from csv file and setting the context. Renders Header, Sidebar and Mapbox.</p>
                <div style={{ height: 400, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710182751/Screenshot_2024-03-12_at_12.09.34_AM_zwb5q1.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <p className='fs-4 pt-2 mt-6'><b>4. Initialise map component</b></p>
                <div style={{ height: 500, width: '100%', backgroundSize: 'cover', backgroundPosition: '0 -2px', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710182752/Screenshot_2024-03-12_at_12.10.47_AM_oku3cj.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <p className='fs-4 pt-2 mt-6'><b>5. Adding vessel markers</b></p>
                <div style={{ height: 500, width: '100%', backgroundSize: 'contain', backgroundPosition: '0 -2px', backgroundRepeat: 'no-repeat', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710182752/Screenshot_2024-03-12_at_12.11.53_AM_ntcno7.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <p className='fs-4 pt-2 mt-6'><b>6. Rendering vessel details</b></p>
                <div style={{ height: 500, width: '100%', backgroundSize: 'contain', backgroundPosition: '0 -2px', backgroundRepeat: 'no-repeat', backgroundImage: 'url( https://res.cloudinary.com/dtf4mnsmj/image/upload/v1710182752/Screenshot_2024-03-12_at_12.12.24_AM_ku4dxa.png)' }} className='bg-grey-10 mt-4 ba bc-grey-10 br-4'></div>

                <div className='mt-15 pt-15' />

            </div>
        </>
    )
}

export default TrackerPage