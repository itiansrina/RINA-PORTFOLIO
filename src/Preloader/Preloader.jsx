import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (initialLoad) {
            // Simulate loading time
            const timer = setTimeout(() => {
                setLoading(false);
                setInitialLoad(false); // Set initialLoad to false after first load
            }, 6000); // Adjust the time as needed

            return () => clearTimeout(timer); // Clear timeout on unmount
        }
    }, []);

    return (
        <>
            { loading ? (
                <div className='preloader'>
                    <svg height="100" stroke="#2c41cb" strokeWidth="2" className="text-line" width="100%"><text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%"># Welcome To My Portfolio</text></svg>
                </div>
            ) : null }
        </>
    );
};

export default Preloader;
