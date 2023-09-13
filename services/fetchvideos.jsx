import axios from "axios";
// import { REACT_APP_API_KEY } from "../key";

const Fetchvideos =()=>{
     return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`)
}
export default Fetchvideos