
import React, { useState, useEffect } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import axios from 'axios'
import { config } from '../../Config/Config'


function Dashboard() {
    const [isEditItem, setIsEditItem] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [myData, setMyData] = useState([])
    const [showError, setShowError] = useState()
    const [postId, setPostId] = useState("")

    let ids = 100;
    const [userId, setUserId] = useState("")

    const getApiData = async (url) => {
        try {
            const res = await axios.get(url)
            setMyData((res.data).slice(0, 8))
        } catch (error) {
            setShowError(error)
        }
    }

    useEffect(() => {
        getApiData(`${config.apiUrl}/posts`);
    },[])

    const updateApiData = async () => {
        try {
            const find = myData.find((item) => item.id === postId);
            console.log(find)
            const res = await axios.patch(`${config.apiUrl}/posts/${postId}`, { ...find, title: title })
            console.log(res.data)

            setMyData(myData.map(
                el => el.id === postId ? { ...el, title: title } : el
            ))

        } catch (error) {
            setShowError(error)
        }
    }


    const handleClick = (e) => {
        e.preventDefault();

        if (isEditItem && isModalOpen) {
            updateApiData();
            setIsEditItem(null)
            handleModalClose()
        }

        else {

            let obj = {
                id: myData[0].id,
                userId: userId,
                title: title,
            }
            handleModalClose()
            myData.unshift(obj);
            setMyData([...myData]);
            console.log(myData)
        }
    }

    const handleEdit = (index) => {
        setIsModalOpen(true)
        const res = myData.find((item) => {
            return item.id === index;
        })
        setUserId(res.userId)
        setTitle(res.title)
        setIsEditItem(true)
        setPostId(index)
    }

    const reset = () => {
        setTitle('');
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        reset();
    }

    const handleDel = (id) => {

        axios.delete((`${config.apiUrl}/posts/${id}`))
            .then((response) => {
                console.log(response)
                const data = myData.filter((item) =>
                    item.id !== id
                )
                setMyData(data);
                console.log(myData)
            })
    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <Button
                    type="button"
                    size='large'
                    className='mr-3'
                    onClick={() => setIsModalOpen(true)}
                >
                    Add
                </Button>
                {showError !== "" && <h2> {showError}</h2>}
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className='px-4 py-2 text-gray-600'>Sr</th>
                            <th className='px-4 py-2 text-gray-600'>Id</th>
                            <th className='px-4 py-2 text-gray-600'>Title</th>
                            <th className='px-4 py-2 text-gray-600'></th>
                        </tr>
                    </thead>
                    <tbody>


                        {myData.map((item, index) => (

                            <tr key={item.id}>

                                <td className='border border-gray-600 px-4 py-2 text-gray-600 font-medium' >{index + 1}</td>
                               <td className='border border-gray-600 px-4 py-2 text-gray-600 font-medium' >{ ids = ids + 1} </td>

                                <td className='border border-gray-600 px-4 py-2 text-gray-600 font-medium'>{item.title}</td>
                                <td className='border border-gray-600 px-4 py-2 text-gray-600 font-medium' >{
                                    <div className="flex justify-center items-center">
                                        <Button
                                            type="submit"
                                            size='large'
                                            className='mr-3'
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            type="button"
                                            size='large'
                                            variant='danger'
                                            onClick={() => handleDel(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                }
                                </td>
                            </tr>

                        ))}


                    </tbody>
                </table>
            </div>
            <CreateModal handleModalClose={handleModalClose} isModalOpen={isModalOpen} handleClick={handleClick} title={title} setTitle={setTitle} userId={userId} setUserId={setUserId} />
        </div>

    )
}

export default Dashboard

function CreateModal({ handleModalClose, isModalOpen, handleClick, title, setTitle}) {
    return (

        <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className={`flex justify-center items-center fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen ? '' : 'hidden'}`}
        >

            <div
                className="relative w-full max-w-md max-h-full"
            >

                <div
                    className="relative bg-gray-300 rounded-lg shadow "
                >
                    <button
                        type="button"
                        onClick={handleModalClose}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>

                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div className="space-y-6">
                            <div className="mb-6">
                                <Input
                                    label="Title"
                                    name="title"
                                    id='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-center items-center" >
                                <Button
                                    type="button"
                                    size='large'
                                    className='mr-3'
                                    onClick={(e) => {
                                        handleClick(e);
                                        handleModalClose()
                                    }}
                                >
                                    Add
                                </Button>
                                <Button
                                    type="button"
                                    size='large'
                                    variant='danger'
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
