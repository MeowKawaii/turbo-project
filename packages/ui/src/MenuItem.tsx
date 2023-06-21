import React from "react"
import Link from 'next/link'

interface MenuItemProps {
  title: string;
  url: string;
}

export function MenuItem({title, url}: MenuItemProps) {
  return (
    <Link className="text-secondary" href={url}>
      {title}
    </Link>
  )
}