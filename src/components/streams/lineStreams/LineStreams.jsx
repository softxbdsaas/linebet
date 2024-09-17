import React from 'react'
import SteamsHome from '../streamsHeaders/SteamsHome'
import StreamsEvenItems from '../streamsHeaders/StreamsEvenItems'
import LiveStreamsToggleButton from '../streamsHeaders/LiveStreamsToggleButton'
import StreamsGamesItems from '../streamsHeaders/StreamsGamesItems'
import LiveStreamsCard from '@/components/cards/LiveStreamsCard'

const LineStreams = () => {
  return (
    <div>
      <div className="py-2">
        <div className="flex items-center gap-[2px]">
          <SteamsHome />
          <StreamsEvenItems />
        </div>
        <div className="flex items-center gap-[2px] py-[2px]">
          {/* <div className="w-[200px]">
            <LiveStreamsToggleButton />
          </div> */}
          <StreamsGamesItems />
        </div>

        <div>
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
        </div>
      </div>
    </div>
  )
}

export default LineStreams
