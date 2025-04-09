import {
  JavaScript,
  TypeScript,
  React,
  TailwindCSS,
  NodeJs,
  MongoDB,
} from 'developer-icons';
import { useState } from 'react';

export default function TechIcons() {
  const [hoveredTech, setHoveredTech] = useState('');
  return (
    <div className=' flex flex-row items-center justify-between my-4 relative'>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: '-50',
          opacity: hoveredTech ? 0.8 : 0,
          transform: hoveredTech
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.70)',
        }}
        className='text-transparent bg-clip-text bg-text-gradient font-bold text-4xl transition-all duration-1000 ease-in-out'
      >
        {hoveredTech || ''}
      </div>
      <JavaScript
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={30}
        onMouseEnter={() => setHoveredTech('JavaScript')}
        onMouseLeave={() => setHoveredTech('')}
        style={{ cursor: 'pointer' }}
      />
      <TypeScript
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={30}
        style={{ marginLeft: 20, cursor: 'pointer' }}
        onMouseEnter={() => setHoveredTech('TypeScript')}
        onMouseLeave={() => setHoveredTech('')}
      />
      <React
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={40}
        style={{ marginLeft: 20, cursor: 'pointer' }}
        onMouseEnter={() => setHoveredTech('React')}
        onMouseLeave={() => setHoveredTech('')}
      />
      <TailwindCSS
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={40}
        style={{ marginLeft: 20, cursor: 'pointer' }}
        onMouseEnter={() => setHoveredTech('TailwindCSS')}
        onMouseLeave={() => setHoveredTech('')}
      />
      <NodeJs
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={40}
        style={{ marginLeft: 20, cursor: 'pointer' }}
        onMouseEnter={() => setHoveredTech('NodeJs')}
        onMouseLeave={() => setHoveredTech('')}
      />
      <MongoDB
        className=' hover:scale-120 transition-all duration-1000 ease-in-out'
        size={40}
        style={{ marginLeft: 20, cursor: 'pointer' }}
        onMouseEnter={() => setHoveredTech('MongoDB')}
        onMouseLeave={() => setHoveredTech('')}
      />
    </div>
  );
}
