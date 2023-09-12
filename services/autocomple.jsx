import axios from "axios"

const AutoComplete = (querry) =>{
    return axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${querry}`)
}

export default AutoComplete