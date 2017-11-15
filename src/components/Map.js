import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { compose, withProps } from 'recompose'

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPSECRET}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
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
      return (
        <Marker key={stop.Id} position={{lat: stop.Coordinate.Lat, lng: stop.Coordinate.Lng}} label={stop.Name}>
        </Marker>
      )
    })

    let position = {
      lat: props.lat,
      lng: props.lng
    }

    const defaultMarker = <Marker key='default' position={position} draggable={props.draggable} onDragEnd={getLongLat} icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'} />

    return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={position}>
      {defaultMarker}
      {stopsMarkers}
    </GoogleMap>)
  }
)

export default Map
