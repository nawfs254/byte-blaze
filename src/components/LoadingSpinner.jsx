// import React from 'react';

import { DotLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex justify-center items-center">
            <DotLoader color="#36d7b7"/>
        </div>
    );
};

export default LoadingSpinner;