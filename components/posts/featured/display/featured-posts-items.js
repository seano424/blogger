import React from "react";
import Image from "next/image";

export default function FeaturedPostsItems(props) {
  const { title, image, exercpt, date, slug} = props.post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    date: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <div className="flex bg-white dark:bg-gray-800 h-36 mb-5 overflow-hidden">
      <div className="flex-none w-24 md:w-48 relative">
        <Image
          className="rounded-lg"
          src={imagePath}
          alt="creating emails image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex-auto">
        <div className="flex flex-wrap pl-4">
          <p className="text-sm font-extrabold text-red-500">{formattedDate}</p>
          <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
