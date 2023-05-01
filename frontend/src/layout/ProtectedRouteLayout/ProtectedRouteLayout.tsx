import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@store/hooks/hooks';
import { RoutesPath } from '@utils/routes-path';

export const ProtectedRouteLayout = () => {
    const { isLogin } = useAppSelector(reducer => reducer.user);

    if (!isLogin) {
        return <Navigate to={`/${RoutesPath.Login}`} />;
    }

    return <Outlet />;
};
