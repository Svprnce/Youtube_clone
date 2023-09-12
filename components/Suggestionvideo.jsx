import '../watchpage.css'
import SuggestionBar from './SuggestionBar'
import useLoadvideos from '../Hooks/useLoadvideos'


const SuggestionVideo = () => {
    const { data } = useLoadvideos()
    // console.log(data?.data?.items[0]);

    return (
        <div className="suggestion_video_container">
            <SuggestionBar />
            {data?.data?.items.map((c,i) => {
                return (
                    <div key={i} className="suggest_video_root">
                        <div className="suggest_video">
                            <img src={c.snippet.thumbnails.medium.url} alt="" />
                        </div>
                        <div className="suggest_video_info">
                            <h3>{c.snippet.title}</h3>
                            <p>{c.snippet.channelTitle}</p>
                            <p>{c.statistics.viewCount} views <span>2 days AGo</span></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SuggestionVideo