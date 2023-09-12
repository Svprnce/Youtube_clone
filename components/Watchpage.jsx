import '../watchpage.css'
import NavBar from './NavBar'
import SuggestionVideo from './Suggestionvideo'
import Watchvideoroot from './Watchvideo'
const Watchpagecontainer = () =>{
    return (
        <div className="watchpage_root">
        <div className="watchpage_navbar">
                <NavBar/>
            </div>
        <div className="watch_page_container">
            <Watchvideoroot/>
            <SuggestionVideo/>
        </div>
        </div>
    )
}

export default Watchpagecontainer