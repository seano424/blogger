import React from 'react'
import Image from 'next/image'

export default function PostItem(props) {
  const { title, image, exerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    date: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <div className="my-5">
      <Image
        className="rounded-lg"
        src={imagePath}
        alt={title}
        width={700}
        height={500}
      />
      <div className="rounded-lg">
        <p>{formattedDate}</p>
        <p className="text-xl font-bold text-purple-500">{title}</p>
        <p>{exerpt}</p>
      </div>
    </div>
  )
}
