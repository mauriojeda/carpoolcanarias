'use client'

import * as React from 'react';
import { Map, Marker, NavigationControl, Source, Layer } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { FeatureCollection, LineString } from 'geojson';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function RoutesMap({ routes }: { routes: any[] }) {
  if (!MAPBOX_TOKEN) return <div className="p-4 bg-gray-100 rounded-xl">Cargando mapa...</div>;

  // 1. Preparamos el GeoJSON usando la columna route_line_geo (la carretera real)
  const geojson: FeatureCollection<LineString> = {
    type: 'FeatureCollection',
    features: routes?.filter(r => r.route_line_geo).map(route => ({
      type: 'Feature',
      properties: { id: route.id },
      geometry: route.route_line_geo // Viene directamente de la Vista de Supabase
    })) || []
  };

  return (
    <div className="h-full w-full">
      <Map
        initialViewState={{
          longitude: -15.5,
          latitude: 28.3,
          zoom: 7.5
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />

        {/* CAPA DE LA CARRETERA REAL (LineString) */}
        <Source id="route-source" type="geojson" data={geojson}>
          <Layer
            id="route-layer"
            type="line"
            layout={{
              'line-join': 'round',
              'line-cap': 'round'
            }}
            paint={{
              'line-color': '#2563eb', // Azul Tailwind
              'line-width': 5,
              'line-opacity': 0.8
            }}
          />
        </Source>

        {/* MARCADORES DE ORIGEN Y DESTINO */}
        {routes?.map((route) => {
          const start = route.origin_geo?.coordinates;
          const end = route.destination_geo?.coordinates;

          return (
            <React.Fragment key={route.id}>
              {/* Pin de Origen */}
              {start && (
                <Marker longitude={start[0]} latitude={start[1]} anchor="bottom">
                  <div className="flex flex-col items-center group">
                    <span className="bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold border opacity-0 group-hover:opacity-100 transition-opacity">
                      {route.origin_name}
                    </span>
                    <div className="text-2xl drop-shadow-md cursor-pointer">📍</div>
                  </div>
                </Marker>
              )}

              {/* Pin de Destino */}
              {end && (
                <Marker longitude={end[0]} latitude={end[1]} anchor="bottom">
                  <div className="flex flex-col items-center group">
                    <span className="bg-black text-white px-2 py-0.5 rounded shadow text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {route.destination_name}
                    </span>
                    <div className="text-2xl drop-shadow-md cursor-pointer">🏁</div>
                  </div>
                </Marker>
              )}
            </React.Fragment>
          );
        })}
      </Map>
    </div>
  );
}