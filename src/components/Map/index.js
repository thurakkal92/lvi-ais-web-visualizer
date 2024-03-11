import React, { useRef, useEffect, useState, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import mapboxgl from 'mapbox-gl'
import Marker from '../Marker';
import { TrackerDataContext, LoadingContext, SidebarContext } from '../../context';

/**
 * Map - Render map component and includes all the map releated logic
 */

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [ lng, setLng ] = useState(-70.9);
    const [ lat, setLat ] = useState(42.35);
    const [ zoom, setZoom ] = useState(9);
    const [ trackerData, setTrackerData ] = useContext(TrackerDataContext)
    const [ showSidebar, setShowSidebar ] = useContext(SidebarContext)
    const { data, selectedId } = trackerData
    const [ loading ] = useContext(LoadingContext)

    function handleMarkerClick(idx, position, mapBox, ref) {
        setShowSidebar(true)
        createRoot(ref.current).render(
            <Marker selected />
        );
        const selectedData = data[ idx ]
        new mapboxgl.Marker(ref.current)
            .setLngLat(position)
            .setRotation(selectedData.heading)
            .addTo(mapBox);
        mapBox.setCenter(position);
        mapBox.setZoom(8)
        setTrackerData({ ...trackerData, selectedId: idx })
    }

    useEffect(() => {
        const mapBox = new mapboxgl.Map({
            container: mapContainer.current,
            style: {
                'version': 8,
                'sources': {
                    'raster-tiles':
                    {
                        'type': 'raster',
                        'tiles': [
                            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        ],
                        'tileSize': 256
                    }
                },
                'layers': [
                    {
                        'id': 'simple-tiles',
                        'type': 'raster',
                        'source': 'raster-tiles',
                        'minzoom': 0,
                        'maxzoom': 22
                    }
                ]
            },
            center: [ 20, 0 ],
            zoom: 3,
            pitch: 0,
            bearing: 0,
            scrollZoom: true,
        });


        // mapBox.on('load', () => {

        data.map(function (item, idx) {
            let position = {
                lat: item.latitude,
                lng: item.longitude,
            }
            let heading = item.heading

            // Create a React ref
            const ref = React.createRef();
            // Create a new DOM node and save it to the React ref
            ref.current = document.createElement('span');

            createRoot(ref.current).render(
                <Marker selected={selectedId === idx} onClick={() => handleMarkerClick(idx, position, mapBox, ref)} />
            );

            new mapboxgl.Marker(ref.current)
                .setLngLat(position)
                .setRotation(heading)
                .addTo(mapBox);
            mapBox.setCenter(position);
            mapBox.setZoom(2)
            if (typeof selectedId === 'number' || selectedId) {
                setShowSidebar(true)
                const selectedData = data[ selectedId ]
                const updatedHeading = selectedData.heading
                const updatedPosition = {
                    lat: selectedData.latitude,
                    lng: selectedData.longitude,
                }
                mapBox.setCenter(updatedPosition);
                mapBox.setZoom(12)
            }
        })
        // Add navigation control (the +/- zoom buttons)
        mapBox.addControl(new mapboxgl.NavigationControl(), 'top-right')

        map.current = mapBox;
    }, [ data, selectedId ]);

    return (
        <div ref={mapContainer} className="h-100p w-100p p-fixed t-0 mt-13 map-container" />
    )
}

export default Map