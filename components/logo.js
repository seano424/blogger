import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/images/diver.png"
      alt="divermatch logo"
      width={40}
      height={40}
    />
  )
}
