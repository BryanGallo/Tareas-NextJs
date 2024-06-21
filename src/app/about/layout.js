import React from "react";

const layoutAbout = ({ children }) => {
    return (
        <div className="w-8/12 mx-auto p-5 h-40 bg-white mt-5 rounded-md">
            {children}
        </div>
    );
};

export default layoutAbout;
