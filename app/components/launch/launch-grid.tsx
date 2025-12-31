import { LaunchType } from '@/types/types'
import { log } from 'console'
import React from 'react'
import LaunchCard from './launch-card';

const LaunchGrid : React.FC<LaunchType> = ({launches}) => {  
      return (
      <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-10 '>
      {launches.map(launch => <li key={launch.id} className=''>
        <LaunchCard {...launch}/>
      </li>)}
      </ul>
    )
}

export default LaunchGrid