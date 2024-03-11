import React, { useContext, useEffect, useState, useRef } from 'react';
import { LoadingContext, TrackerDataContext, SidebarContext } from '../../context';
import { ReactComponent as Boat } from "../../assets/images/boat.svg";
import { ReactComponent as Ship } from "../../assets/images/ship.svg";
import { ReactComponent as Expand } from "../../assets/images/expand.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as LineStart } from "../../assets/images/line-start.svg";
import Loader from './Loader';
import classNames from 'classnames';
import InfoItem from './InfoItem'
import { removeAtFromText } from '../../utils'
import Flag from '../atoms/Flag';
import Collapse from '../atoms/Collapse';
import BlipAnimation from '../atoms/Blip';

/**
 * Sidebar - Show all the ASI information
 */

function Sidebar(props) {
    const { open } = props
    const [ trackerData, setTrackerData ] = useContext(TrackerDataContext)
    const [ showSidebar ] = useContext(SidebarContext)
    const { data, selectedId } = trackerData
    const [ loading ] = useContext(LoadingContext)
    const [ activeIdx, setActiveIdx ] = useState()
    const sidebarRef = useRef(null)
    const itemRef = useRef(null)

    const scrollToRef = (ref, offsetTop) => {
        console.log(offsetTop, 'offsetTop')
        ref.current.scroll({ top: offsetTop, behavior: 'smooth' })
    };

    useEffect(() => {
        setActiveIdx(selectedId)
        console.log(itemRef, 'itemRef')
        if (itemRef.current) {
            const offsetTop = itemRef.current.offsetTop
            sidebarRef.current.scrollTo({
                bottom: offsetTop,
                behavior: 'smooth'
            });
        }
    }, [ selectedId, itemRef ])

    function handleItemClick(selectedIdx) {
        if (selectedIdx == activeIdx) {
            setActiveIdx(null)
            setTrackerData({ ...trackerData, selectedId: null })
        }
        else {
            setActiveIdx(selectedIdx)
            setTrackerData({ ...trackerData, selectedId: selectedIdx })
        }

    }


    function renderVesselDetails() {
        if (loading) return <Loader />
        return (
            data.map((item, idx) => (
                <div ref={idx === activeIdx ? itemRef : null} data-selected={activeIdx === idx ? 'true' : ''} onClick={() => handleItemClick(idx)} className={classNames('br-4 hover:bg-grey-05 nxm-2 px-2 py-2 c-pointer mb-2 ', {
                    'bg-grey-05': idx === activeIdx
                })}>
                    <div className='flex flex-middle flex-between'>
                        <div className='flex flex-middle'>
                            <div className='p-relative'>
                                {item.speed > 0 && (
                                    <div style={{ width: 8 }} className='p-absolute nt-1 nr-1 bg-success-dark h-2 br-100' />
                                )}
                                {item.status === '1' && (
                                    <div style={{ width: 8 }} className='p-absolute nt-1 nr-1 bg-grey-60 h-2 br-100' />
                                )}

                                <Ship className='c-grey-60' />
                            </div>
                            <div className='pr-3' />
                            <p className={classNames('fs-body-2 c-text fw-600 tt-capitalize', {
                                'fs-5': idx === activeIdx
                            })}>{removeAtFromText(item.name)?.toLowerCase()}</p>
                        </div>
                        <div className='flex flex-middle'>
                            <Flag countryCode={item.flag} />

                            <Expand className={idx === activeIdx ? 'rotate-180' : ''} />
                        </div>

                    </div>

                    <Collapse pose={activeIdx === idx ? 'open' : 'collapsed'}>
                        <div className='py-4'>
                            <div className='bg-white p-3 br-4'>
                                <div className='flex flex-center flex-between pb-2'>
                                    <div className='fs-body fw-700 c-text'>NA</div>
                                    <div className='fs-body fw-700 c-text'>{removeAtFromText(item.destination)}</div>
                                </div>
                                <div className='flex flex-center'>
                                    <div className='pr-2'><LineStart height={28} width={28} /></div>
                                    <div className='flex-1 bw-4 bbs-dotted bn bb bc-brand h-0 pt-3 p-relative'>
                                        <div className='p-absolute z-10 h-3 w-20 rotate-90 t-2 l-50p'>
                                            <Boat />
                                        </div>

                                    </div>
                                    <div className='pl-2'><Location height={28} width={28} /></div>
                                </div>
                                <div className='flex flex-center flex-between mt-2'>
                                    <div className=''>
                                        <div className='fs-caption-2 fw-400 c-text-light ta-left'>Departure</div>
                                        <div className='fs-caption-2 fw-400 c-black ta-left'>NA</div>
                                    </div>
                                    <div>
                                        <div className='fs-caption-2 fw-400 c-text-light ta-right'>Arrival</div>
                                        <div className='fs-caption-2 fw-400 c-black'>{item.eta}</div>
                                    </div>

                                </div>
                            </div>
                            <div className='pt-4 pb-2'>
                                <p className='c-text-dark fw-600 fs-body-2'>Latest AIS Information</p>
                            </div>
                            <InfoItem label='Vessel type' value={item.ship_type} />
                            <InfoItem label='Collection type' value={item.collection_type} />
                            <InfoItem label='Flag' value={item.flag} />
                            <InfoItem label='IMO' value={item.imo} />
                            <InfoItem label='MMSI' value={item.mmsi} />
                            <InfoItem label='Speed' value={`${item.speed}knots`} />
                            <InfoItem label='Position updated' value={item.imo} />
                            <InfoItem label='Call sign' value={item.call_sign} />
                            <InfoItem label='True heading' value={`${item.heading}°`} />
                            <InfoItem label='Draught' value={`${item.draught}m`} />
                        </div>
                    </Collapse>
                </div>
            ))
        )
    }
    return (
        <div ref={sidebarRef} className={classNames('bg-white mt-13 z-10 p-relative bs-border br bc-grey-10 p-4 oy-auto t-all', {
            'o-0': !showSidebar
        })} style={{ width: 365, height: 'calc(100vh - 52px)', transform: `translateX(${showSidebar ? 0 : '-365px'})` }}>
            {renderVesselDetails()}
        </div>
    )
}

export default Sidebar