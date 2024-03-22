import { useLoaderData, useNavigation } from "react-router-dom";
import Blog from "../components/Blog";
import LoadingSpinner from "../components/LoadingSpinner";

const Blogs = () => {
    const blogs = useLoaderData();
    const topBlog = blogs[0]
    const navigation = useNavigation();
    
    if(navigation.state === 'loading') return <LoadingSpinner></LoadingSpinner>
    
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 my-10">
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={topBlog.cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{topBlog.title}</h3>
                        <span className="text-xs dark:text-gray-400">{new Date(topBlog.published_at).toLocaleDateString()}</span>
                        <p>{topBlog.description}</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>


                {/* <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>

                </div> */}
            </div>
        </section>
    );
};

export default Blogs;