import axios from 'axios'
const KEY="AIzaSyAtvvCgrKe0D7vSgysD9g1GoZtSrlTGLOA";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});