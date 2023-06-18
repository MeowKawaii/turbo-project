import React from "react"
import Image from 'next/image'

import MenuItem from '~/components/MenuItem'

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
  title: 'version',
  url: '',
},{
  title: 'GitHub',
  url: 'https://github.com/ant-design/ant-design-pro',
},]

export default function Header() {
  return (
    <nav className="flex justify-center sm:justify-between items-center py-5 px-8 drop-shadow-md bg-white">
      <div className="flex">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          priority
          alt="Ant Logo"
        />
        <h1>Ant Design Pro</h1>
      </div>
      <ul className="flex items-center space-x-10">
        {MENUS.map(({title, url}) => (
          <li key={title}>
            <MenuItem title={title} url={url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}