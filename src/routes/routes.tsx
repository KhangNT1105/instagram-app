import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import withLayout from 'components/HOC/withLayout/withLayout';
import { Pages } from './routesString';
import HomeLayout from 'layouts/homeLayout/HomeLayout';
import Spinner from 'components/spinner/Spinner';


const Routes: React.FC = () => {
    return <ErrorBoundary>
        <Switch>
            <Route
                exact={true}
                component={withLayout(HomeLayout, () => (
                    <Suspense fallback={<Spinner />}>
                        <Pages.Home />
                    </Suspense>
                ))}
            />

        </Switch>
    </ErrorBoundary>;
}

export default Routes;