import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utilities";
import Blog from "../components/Blog";
import NoBookmarks from "../components/NoBookmarks";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])
    
    const handleDeleteBtn = (id) => {
        console.log(id)
        deleteBlogs(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    const items = localStorage.getItem('blogs');
    console.log(items)
    if(items === '[]') return <NoBookmarks></NoBookmarks>

    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5 mx-auto w-4/5">
            {
                blogs.map(blog => <Blog deletable={true}handleDeleteBtn={handleDeleteBtn} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Bookmarks;