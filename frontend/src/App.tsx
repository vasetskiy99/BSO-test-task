import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRouteLayout } from 'src/layout/ProtectedRouteLayout/ProtectedRouteLayout';
import { PublicOnlyRouteLayout } from 'src/layout/PublicOnlyRouteLayout/PublicOnlyRouteLayout';

import { CollectionUpdateToast } from '@components/CollectionUpdateToast/CollectionUpdateToast';
import { Header } from '@components/Header/Header';
import { Preloader } from '@components/Preloader/Preloader';
import { CartPage } from '@pages/CartPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { initAppAsync } from '@store/slices/app/app';
import { RoutesPath } from '@utils/routes-path';

function App() {
    const dispatch = useAppDispatch();

    const { initApp, loading } = useAppSelector(state => state.app);

    useEffect(() => {
        if (!initApp) {
            dispatch(initAppAsync());
        }
    }, [initApp, dispatch]);

    if (loading) return <Preloader />;

    return (
        <>
            <CollectionUpdateToast />
            <Header />
            <Routes>
                <Route path={`/${RoutesPath.Home}`} element={<HomePage />} />

                <Route path="/" element={<ProtectedRouteLayout />}>
                    <Route path={RoutesPath.Cart} element={<CartPage />} />
                </Route>
                <Route path="/" element={<PublicOnlyRouteLayout />}>
                    <Route path={RoutesPath.Login} element={<LoginPage />} />
                    <Route path={RoutesPath.Register} element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
