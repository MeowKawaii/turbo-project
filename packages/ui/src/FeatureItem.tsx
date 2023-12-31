import React from "react"
import Image from 'next/image'

interface FeatureItemProps {
  title: string
  desc: string
  src: string
}

export function FeatureItem({title, desc, src}: FeatureItemProps) {
  return (
    <div className="flex flex-col justify-center items-center mb-16 mx-2">
      <Image
          src={src}
          width={60}
          height={60}
          alt={src}
        />
        <p className="my-5 text-xl font-medium">{title}</p>
        <p className="mb-3 text-secondary text-center">{desc}</p>
    </div>
  )
}