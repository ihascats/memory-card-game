import React, { useState } from 'react';
import './styles/MemoryCard.css';

export default function MemoryCard({ game, source, alt }) {
  const [selected, setSelected] = useState(false);

  return (
    <img
      onClick={() => {
        setSelected(true);
        if (selected) {
          game();
        }
      }}
      src={source}
      alt={alt}
    />
  );
}
