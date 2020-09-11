import React from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate/src/TextTruncate'
import  {ThumbUpSharp} from '@material-ui/icons'


const base_url = "https://image.tmdb.org/t/p/original"

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                 alt="movie poster"/>
            <TextTruncate
                line={1}
                element={'p'}
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p><ThumbUpSharp />{movie.vote_count}</p>
        </div>
    )
}

export default VideoCard