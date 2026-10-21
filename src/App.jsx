import React, { useEffect, useState } from 'react';
import Spawn from './components/Spawn';
export default function App() {
  const getScale = () => Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  const [scale, setScale] = useState(getScale);
  useEffect(() => {
    const resize = () => setScale(getScale());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <div className="spawn-demo-stage" style={{transform: `translate(-50%, -50%) scale(${scale})`}}><Spawn /></div>;
}
