import { useState } from "react";
import "./LiveMap.css";

function LiveMap() {
  const [zoom, setZoom] = useState(1);
  const [layers, setLayers] = useState({ boundary: true, infrastructure: true, risk: true, weather: true, incidents: true });
  const toggle = (key) => setLayers(v => ({ ...v, [key]: !v[key] }));
  const locate = () => alert("Current field position captured for this demo.");
  return <div className="live-map-page">
    <div className="live-map-header"><h1>Field Officer Live Map</h1><p>District intelligence layers • Read-only operational view</p></div>
    <div className="live-map-layout">
      <div className="map-box" style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}>
        {layers.infrastructure && <><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/></>}
        {layers.boundary && <div className="district-boundary"/>}
        {layers.risk && <><div className="risk-marker high-marker"><div className="marker-inner">!</div></div><div className="risk-marker moderate-marker"><div className="marker-inner">!</div></div><div className="risk-marker safe-marker"><div className="marker-inner">✓</div></div></>}
        {layers.incidents && <div className="small-marker">!</div>}
        <div className="zoom-controls"><button type="button" onClick={() => setZoom(z => Math.min(1.12, +(z + .04).toFixed(2)))}>+</button><button type="button" onClick={() => setZoom(z => Math.max(.92, +(z - .04).toFixed(2)))}>−</button></div>
      </div>
      <div className="map-side-panel"><div className="map-section"><h2>Map Layers</h2><p className="section-subtitle">Toggle relevant intelligence</p>
        {[['boundary','District Boundary'],['infrastructure','Infrastructure'],['risk','Risk Level'],['weather','Weather'],['incidents','Incidents']].map(([key,label]) => <button type="button" className="layer-item" key={key} onClick={() => toggle(key)}><span className="checkbox">{layers[key] ? '✓' : ''}</span><span>{label}</span></button>)}
      </div><div className="divider"/><div className="map-section"><h2>Legend</h2><div className="legend-item"><span className="legend-dot high"/><span>High Risk</span></div><div className="legend-item"><span className="legend-dot moderate"/><span>Moderate</span></div><div className="legend-item"><span className="legend-dot safe"/><span>Safe / Low</span></div></div><div className="district-status"><h2>District Status</h2><div className="status-row"><span>Connectivity</span><strong className="good">Good</strong></div><div className="status-row"><span>Accessibility</span><strong>7.8 / 10</strong></div><div className="status-row"><span>Weather</span><strong className="moderate-text">Moderate</strong></div><button type="button" className="map-location-action" onClick={locate}>⌖ Use my location</button></div></div>
    </div>
  </div>;
}
export default LiveMap;
