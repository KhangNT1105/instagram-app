import React from 'react';

const HomeLayout: React.FC = ({ children }) => {
    return <div className="homeLayout">
        {children}
    </div>;
}

export default HomeLayout;