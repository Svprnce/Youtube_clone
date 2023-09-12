import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import Fetchvideos from '../services/fetchvideos';
const Video = ()=>{
    const { isLoading, isError, data, error } = useQuery(['yt_videos'], Fetchvideos,{
        staleTime : 500000,
        cacheTime : 100000
    })
    // console.log(data?.data?.items);
      if (isLoading) {
        return <span>Loading...</span>
      }
      if (isError) {
        return <span>Error: {error.message}</span>
      }
    return (
        <section className="video_container">
            {data.data?.items?.map((c,i)=>{
                return (
                    <Link to ={`watch/${c.id}`} key={i} state={c}><div className="video_root">
                    <div className="video">
                        <img src={c.snippet?.thumbnails.medium.url} alt="" />
                    </div>
                    <div className="video_info">
                        <div className="video_info_column_one">
                            {/* <img src={RxAvatar} alt="" /> */}
                            <RxAvatar/>
                        </div>
                        <div className="video_info_column_two">
                            <h2>{c.snippet?.title}</h2>
                            <p>{c.snippet?.channelTitle}</p>
                            <p>{c.statistics?.viewCount} - <span> 7 hours Ago </span></p>
                        </div>
                    </div>
                </div></Link>
                )
            })}
        </section>
    )
}

export default Video