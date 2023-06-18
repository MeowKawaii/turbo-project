import React from 'react'

import FeatureItem from './FeatureItem'

const FEATURES = [{
  title: 'Fast',
  desc: 'Based on the Module Federation, the project starts in seconds',
  src: '/lightning.svg'
}, {
  title: 'ProComponents',
  desc: 'Built-in template components for efficient development',
  src: '/tech_logo.svg'
}, {
  title: 'Internationalization',
  desc: 'Provide a complete international solution',
  src: '/earth.png'
}, {
  title: 'Preset style',
  desc: 'The style is beautiful and generous, seamlessly docking Ant Design',
  src: '/leaf.png'
}, {
  title: 'Best practices',
  desc: 'Comes with multi-scenario best practices, which work by default',
  src: '/heart.png'
}, {
  title: 'TypeScript',
  desc: 'Develop in full using TypeScript',
  src: '/ts_logo.svg'
}]

export default function FeatureSession() {

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <ul className="flex flex-wrap justify-between items-center">
        {FEATURES.map(({title, desc, src}) => (
          <li 
            key={title}
            className="w-full sm:w-1/2 md:w-1/3">
            <FeatureItem 
              title={title}
              desc={desc}
              src={src} />
          </li>
        ))}
      </ul>
    </div>
  )
}