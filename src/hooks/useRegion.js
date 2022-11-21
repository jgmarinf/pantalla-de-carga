import axios from "axios"
import { useEffect, useState } from "react"


const useRegion = () => {
    const [api, setApi] = useState()    
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const URL ="https://restcountries.com/v3.1/region/europe"
        axios.get(URL)
            .then (res => {
                setApi(res.data)
                setLoading(!loading)
            })
            .catch(err => console.log(err))
    }, [])
    
    return {api, loading}
  
}

export default useRegion