import React from 'react';

const OverviewListEntry = props => (
  <li className="overview" style={{ listStyle: 'disc', paddingLeft: '10px' }}>
    {props.overview}
  </li>
);

export default OverviewListEntry;
