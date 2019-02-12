import React from 'react';
import OverviewListEntry from './OverviewListEntry.jsx'

const OverviewList = (props) => {
  return (
    <div>
      {props.overviews.map(overview => {
        return <OverviewListEntry overview={overview}/>
      })}
    </div>
  )
}

export default OverviewList