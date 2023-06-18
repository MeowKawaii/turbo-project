import React from "react"
import Image from 'next/image'

interface FeatureItemProps {
  title: string
  desc: string
  src: string
}

export default function FeatureItem({title, desc, src}: FeatureItemProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
          src={src}
          width={60}
          height={60}
          alt={src}
        />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}