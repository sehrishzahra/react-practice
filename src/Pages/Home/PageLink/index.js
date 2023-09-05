import { Link } from "react-router-dom";



function PageLink({address, name}) {
    return (
        
        <Link to={address} > <button className=" text-white mx-2 bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
         {name}
        </button></Link>
    );
}

export default PageLink