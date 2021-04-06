import React from 'react';
import { RouteProps } from 'react-router';

const withLayout = (Layout: React.FC, Component: React.FC) => (props: RouteProps) => {
    return <Layout>
        <Component {...props} />
    </Layout>;
}

export default withLayout;