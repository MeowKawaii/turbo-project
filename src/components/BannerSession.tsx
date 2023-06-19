import React from "react"
import Image from 'next/image'
import Link from "next/link"

export default function BannerSession() {
  return (
    <div className="flex justify-around p-10" style={{height: 520, backgroundColor: "#f9fcff"}}>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="my-3">ANT DESIGN PRO</h1>
          <p className="text-xl mb-5">Out-of-box UI solution for enterprise applications</p>
          <div className="mt-16">
            <Link href="https://preview.pro.ant.design/dashboard/analysis">
              <button className="text-base btn-primary rounded-full h-10 mb-4 mr-4">
                Preview
              </button>
            </Link>
            <Link href="https://pro.ant.design/docs/getting-started/">
              <button className="text-base btn-outline-primary rounded-full h-10 mb-4 mr-4">
                Getting Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center">
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