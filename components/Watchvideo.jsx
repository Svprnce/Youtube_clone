import { useParams, useLocation } from 'react-router-dom';
import Button from '../utils/button';
import '../watchpage.css'
import { RxAvatar } from 'react-icons/rx';

const Watchvideoroot = () => {
    const channel_btns = ['Subscribe', 'Join']
    const channel_actions_btns = ['Like', 'Share', 'Thanks']
    const info = useParams()
    const {state} = useLocation()
    // console.log(state.snippet?.description);
    // console.log(state.snippet?.localized?.title);
    
    return (
        <div className="watch_video_root">
            <div className="watch_video">
                <iframe src={`https://www.youtube.com/embed/${state.id}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="watch_video_info">
                <h1>{state.snippet?.localized?.title}</h1>
                <div className="watch_video_btns">
                    <div className="watch_video_channel_btns">
                        <div className="watch_video_channel_logo">
                        <RxAvatar />
                        </div>
                        <div className="watch_video_channel_name">
                            <h4>{state.snippet?.channelTitle}</h4>
                            <p>6M subscribers</p>
                        </div>
                        <div className="watch_video_channel_subscribe_btns">
                            {channel_btns.map((c, i) => {
                                return (<Button key={i} btn={c} />)
                            })}
                        </div>
                    </div>
                    <div className="watch_video_actions_btns">
                        {channel_actions_btns.map((c,i)=>{
                            return ( <Button key={i} btn={c}/>)
                        })}
                    </div>
                </div>
                <h3>Description</h3>
                <p>{state.snippet?.description}</p>
            </div>
        </div>
    )
}

export default Watchvideoroot