import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerWithLabel } from 'react-google-maps'
import { compose, withProps } from 'recompose'

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  {
    function getLongLat (e) {
      props.handleMapMarker(e.latLng.lat(), e.latLng.lng())
    }

    const stopsMarkers = props.stops.map(stop => {
      return (<Marker key={stop.Id} position={{lat: stop.Coordinate.Lat, lng: stop.Coordinate.Lng}} />)
    })

    let position = {
      lat: props.lat,
      lng: props.lng
    }

    const defaultMarker = <Marker position={position} draggable={true} onDragEnd={getLongLat} icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'} />
    stopsMarkers.push(defaultMarker)

    return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -6.260721, lng: 106.7810405 }}>
        {props.isMarkerShown &&  stopsMarkers }
    </GoogleMap>)
  }
)

export default Map
