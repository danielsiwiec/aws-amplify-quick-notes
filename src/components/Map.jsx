import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const Map = ({ place, onDragEnd }) => (
  <GoogleMap
    center={place.geo}
    zoom={13}
    mapContainerClassName='div'
    mapContainerStyle={{ height: '60vh', width: '100%' }}
  >
    <Marker position={place.geo} draggable onDragEnd={onDragEnd} />
  </GoogleMap>
)

export default Map