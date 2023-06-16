import React from "react"
import Link from 'next/link'

interface MenuItemProps {
  title: string;
  url: string;
}

export default function MenuItem({title, url}: MenuItemProps) {
  return (
    <Link href={url}>
      {title}
    </Link>
  )
}