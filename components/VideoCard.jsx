import { videoCardContent } from '@/constants/videoCardsConts'
import React from 'react'

const VideoCard = () => {
  return (
    <>
      {videoCardContent.map((video) => (
        <div className='rounded-2xl video_card_border' key={video.id}>
          <div className='w-full h-[210px] relative rounded-tl-2xl rounded-tr-2xl'>
            <img 
              src={video.thumbnail} 
              alt="Thumbnail" 
              className='w-full h-full rounded-tl-2xl rounded-tr-2xl object-cover'
            />
            <p className='text-white text-sm bg-black p-1 absolute bottom-4 right-4'>{video.duration}</p>
          </div>

          <div className='w-full pt-6 pb-2 px-4 flex flex-row card_description_bg gap-4'>
            <div className='h-[40px] w-[50px]'>
              <img 
                src={video.creatorProfile} 
                alt="Avatar" 
                className='h-full w-full object-cover'
              />
            </div>
            <div>
              <h3 className='text-l font-bold text-white'>{video.videoTitle}</h3>
              <p className='text-gray-400 text-sm mt-2'>{video.creatorName}</p>
              <div className='flex flex-row text-gray-400 mt-2 text-sm'>
                <p>{video.views}</p>
                <p>&nbsp;-&nbsp;</p>
                <p>{video.uploadDate}</p>
              </div>
            </div>
          </div>
        </div>


      ))}
    </>
  )
}

export default VideoCard