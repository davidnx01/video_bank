import React from 'react'
import VideoCard from './VideoCard'

const VideoContent = () => {
  return (
    <section className='w-full py-8 px-12 grid grid-cols-3 gap-y-10 gap-x-4 overflow-x-auto h-[765px]'>
      <VideoCard />
    </section>
  )
}

export default VideoContent