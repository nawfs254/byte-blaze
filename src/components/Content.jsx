// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData();
    const {cover_image, title, body_html, tags} = blog;
    return (
        <div rel="noopener noreferrer" href="#" className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border-primary border-2 p-2 border-opacity-10">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-md" src={cover_image || placeholderImage} />
            <div className="p-6 space-y-2">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900 mr-3">#{tag}</a>)
                }
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;