import React from 'react';

const Container = ({ children, className }) => {

    const max_width = "max-w-[1320px] mx-auto";

    return (
        <div className={`${max_width} ${className}`}>
            {children}
        </div>
    );
};

export default Container;