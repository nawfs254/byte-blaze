import PropTypes from 'prop-types';
import placeholderImage from '../assets/404.jpg'
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';

const Blog = ({ blog, deletable, handleDeleteBtn }) => {
    const { id, cover_image, title, description, published_at } = blog;


    return (
        <div className='flex relative'>
            <Link to={`/blogs/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border-primary hover:border-secondary border-2 p-2 hover:scale-105 transition">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-md" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>

            {deletable && <div onClick={() => handleDeleteBtn(id)} className='absolute text-3xl bg-red-500 w-fit h-fit p-3 rounded-full right-5 -top-5'>
                    <MdDeleteForever></MdDeleteForever>
            </div>}

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    deletable: PropTypes.bool,
    handleDeleteBtn: PropTypes.func,
}

export default Blog;