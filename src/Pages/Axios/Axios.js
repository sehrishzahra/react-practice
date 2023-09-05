
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Axios() {

    const [myData, setMyData] = useState([])
    const [showError, setShowError] = useState()

    const API = "https://jsonplaceholder.typicode.com"

    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => {
    //             setMyData(res.data)
    //         })
    //         .catch((error) => setShowError(error.message))
    // }, [])

    const getApiData = async(url) => {
        try {
            const res = await axios.get(url)
            setMyData(res.data)
            
        } catch (error) {
            setShowError(error)
        }
    }
    

    useEffect(() => {
      getApiData(`${API}/posts`)
    }, [])
    

    return (
        <div>
            {showError !== "" && <h2 text-center >{showError}</h2>}
            <h2 className='text-center'>My Stories</h2>
            {myData.map((data) => {
                const { id, title, body } = data;
                return <div className="flex justify-center items-center w-full flex-col p-[30px]" key={id}>
                    <h1>{id}</h1>
                    <h2>{title}</h2>
                    <p className='text-center'>{body}</p>
                </div>
            })}
        </div>
    )
}

export default Axios
