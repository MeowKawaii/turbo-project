import React from "react"
import Image from 'next/image'
import Link from "next/link"

import {MenuItem} from './MenuItem'

const MENUS = [{
  title: 'Documents',
  url: 'https://pro.ant.design/docs/overview',
},{
  title: 'Config',
  url: 'https://pro.ant.design/config/config',
},{
  title: 'Blog',
  url: 'https://pro.ant.design/blog/change-theme',
},{
  title: 'GitHub',
  url: 'https://github.com/ant-design/ant-design-pro',
},]

export function Header() {
  return (
    <nav className="flex justify-center md:justify-between items-center px-14 h-12 md:h-16 drop-shadow-md bg-white">
      <div className="flex">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          priority
          alt="Ant Logo"
        />
        <Link 
          href="https://pro.ant.design/"
          className="text-black text-xl sm:text-2xl font-medium ml-4">
          Ant Design Pro
        </Link>
      </div>
      <ul className="hidden md:flex items-center space-x-10">
        {MENUS.map(({title, url}) => (
          <li key={title}>
            <MenuItem title={title} url={url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}