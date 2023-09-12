import { useState, useEffect } from "react"

const useMobileDetect = (screen_size = 768)=>{
    const [ismobile, setismobile] = useState(false)
    useEffect(()=>{
        const checkmobile=()=>{
            
            // console.log(window.innerWidth);
            setismobile(window.innerWidth <= screen_size)
        }

        checkmobile()
        window.addEventListener('resize', checkmobile())
        return (
            window.removeEventListener('resize', checkmobile())
        )
    },[screen_size])

    return ismobile

}

export default useMobileDetect