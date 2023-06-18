import React from "react"
import Image from 'next/image'

import Button from "./Button"

export default function BannerSession() {
  return (
    <div className="flex justify-around py-10" style={{backgroundColor: "#f9fcff"}}>
      <div className="flex justify-center items-center">
        <div>
          <h1>ANT DESIGN PRO</h1>
          <p>Out-of-box UI solution for enterprise applications</p>
          <div>
            <Button />
            <Button />
            <Button />
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
      <Image
          src="/logo.svg"
          width={300}
          height={300}
          priority
          alt="Ant Logo"
        />
      </div>
    </div>
  )
}