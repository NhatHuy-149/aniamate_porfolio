"use client"

import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { LatLngTuple } from "leaflet"

const position: LatLngTuple = [10.762622, 106.660172]

// Dynamically import the map component with no SSR
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100" />,
})

export default function Map() {
  return (
    <div className="w-full h-full">
      {/* <MapComponent position={position} />
       */}
      {/* <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12863.153178823846!2d108.14707600081015!3d16.068612693471593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d50490a803%3A0x32164da82aaab58f!2zMTE3IMSQ4buTbmcgS8OoLCBIb8OgIEtow6FuaCBC4bqvYywgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1747276882458!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
