// import React from 'react'
// import GoogleMapReact from "google-map-react"
// const MarkersC = ({ text }) => <div className="contact">{text}</div>;

// const Map = ({position}) => {
//     console.log(position)
//   return (
//     <>
//          <GoogleMapReact 
//             bootstrapURLKeys={{key:'AIzaSyCKHS8Kz2sum-wilg2d-zs4yrfPMeBBd1Q'}} 
//             center={position}
//             zoom={7}
//             ></GoogleMapReact>
//             <MarkersC lat={position.lat} lng={position.lng} />
            
//     </>
//   )
// }

// export default Map


import React from 'react'
import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api';


const Map = ({position}) => {
  const{lat,lng}=position
  console.log(lat,lng)
  console.log(position)
    const {isLoaded}=useLoadScript({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyCKHS8Kz2sum-wilg2d-zs4yrfPMeBBd1Q'
    });
 if (!isLoaded)
 return (
  <>
       Loading....
        
          
  </>
)
  return (
    <>
         <GoogleMap 
            center={{lat: lat ,lng:lng}}
            
            zoom={14}
            mapContainerClassName="map-container"
            >
              <Marker position={{lat: lat ,lng:lng}}/>
            </GoogleMap>
          
            
    </>
  )

 
 
}

export default Map


