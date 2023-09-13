import { useState, useEffect, memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useMobiledetect from '../Hooks/useMobiledetect'
import logo from '../assets/images/youtube-logo_png.png'
import { RxAvatar } from 'react-icons/rx';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi';
import { toggleMenu } from '../store/MenuSlice';

export async function autosuggest(searchtext) {
    try {
        let data = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchtext}`)
        let d = await data.json()
        return d
    }
    catch (error) {
        
    }
}

const Header = () => {
    const [suggest, setSuggest] = useState([])
    const [searchtext, setSearchtext] = useState('')
    const [searchbaropen, setSearchbaropen] = useState(false)
    const dispatch = useDispatch()
    let ismobile = useMobiledetect()
    useEffect(() => {
        if (searchtext) {
            (async () => {
                try {
                    let res = await autosuggest(searchtext)
                    setSuggest(res[1])
                }
                catch (error) {
                    
                }
            })()
        }
        else{
            setSuggest([])
        }
    }, [searchtext])
    return (
        <div className="header">
            <div className={searchbaropen ? 'header_first header_none' : 'header_first'}>
                <div onClick={() => { dispatch(toggleMenu()) }} className="header_menu_btn">
                    <GiHamburgerMenu />
                </div>
                <div className="header_logo">
                    <Link to='/'><img className='header_yt_logo' src={logo} alt="" /></Link>
                </div>
            </div>

            <div className='header_second'>
                <div className={searchbaropen ? 'header_search_area searchbar_full' : 'header_search_area header_none'}>
                    <input type="text" placeholder="search" value={searchtext} onChange={(e) => {
                        e.preventDefault()
                        setSearchtext(e.target.value)
                    }} />
                    <button onClick={() => { if (ismobile) { setSearchbaropen(!searchbaropen) } }}>{ismobile ? (searchbaropen ? (<button className='close_btn' onClick={() => { setSearchtext(''); console.log('clicked') }}><AiOutlineClose className='close_btn' /></button>) : <FiSearch />) : <FiSearch />}</button>
                </div>
                <button onClick={() => { setSearchbaropen(!searchbaropen) }} className={!searchbaropen ? 'search_logo lg_none' : 'lg_none header_none'}><FiSearch /></button>
                <div className="header_suggestion_area">
                    {(suggest.length > 0) ? <ul>
                        {suggest.map((c, i) => <li key={i}><p> <span><FiSearch /></span>{c}</p></li>)}
                    </ul> : null}
                </div>
            </div>
            <div className="header_third">
                <div className="avatar"><RxAvatar /><RxAvatar /><RxAvatar /></div>
            </div>
        </div>
    )
}

export default memo(Header)