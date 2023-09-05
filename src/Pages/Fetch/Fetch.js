import React, { useState, useEffect } from 'react'

function Axios() {
    const [storeDate, setStoreDate] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const API = "https://jsonplaceholder.typicode.com/posts?_limit=8"

    const fetchApiData = async (url) => {
        try {
            const fetchData = await fetch(url)
            const Data = await fetchData.json()
            setStoreDate([...Data])
            setIsLoading(false)
            console.log(Data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApiData(API)
    }, [])

    return (
        <div>
            <div>My news Stories</div>
            {isLoading && <div>A moment please...</div>}
            {storeDate.map((user) => (
                    <li className='flex justify-center items-center w-full' key={user.id}>
                        <h3>{user.title}</h3>
                    </li>
            ))}






        </div>
    )
}

export default Axios