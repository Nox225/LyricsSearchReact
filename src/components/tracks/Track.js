import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
    const { track } = props
  return (
    <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
            <div className='card-body'>
                <h5>{track.artist_name}</h5>
                <p className='card-text'>
                    <strong><i className='fas fa-play h7'></i>Track</strong>: {track.track_name}
                    <br/>
                    <strong><i className='fas fa-compact-disc h7'></i>Album</strong>: {track.album_name}
                </p>
                <Link to={`lyrics/track/${track.track.track_id}`} className="btn btn-dark btn-block button" style={{fontFamily: 'inherit'}}>
                    <i className='fas fa-chevron-right h7 view-lyrics'></i>
                    <div>View Lyrics</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Track
