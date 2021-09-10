import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="relative px-4 mx-auto my-6 rounded-full max-w-7xl sm:px-6 lg:px-8">
      <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] ">
        <Image
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1509315047084-af74f1192bee"
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
      </div>
      <div className="absolute right-0 top-10 ">
        <h3 className="w-64 mb-3 text-4xl">test</h3>
        <p>description</p>

        <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">
          buttonText
        </button>
      </div>
    </section>
  )
}

export default Banner
