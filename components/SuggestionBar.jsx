const SuggestionBar = () =>{

    const suggestion_bar_content = ['New to You', 'TRending', 'Python', 'Build Scratch','New to You', 'TRending', 'Python', 'Build Scratch','New to You', 'TRending', 'Python', 'Build Scratch','New to You', 'TRending', 'Python', 'Build Scratch','New to You', ]
    return (
        <div className="suggestion_bar">
            <ul className="suggestion_bar_ul">
            {suggestion_bar_content.map((c,i)=>{
                return (
                    <li key={i} className="suggestion_bar_li" >{c}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default SuggestionBar