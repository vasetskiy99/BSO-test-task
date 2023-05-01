import { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { logout } from '@store/slices/user/user';
import { RoutesPath } from '@utils/routes-path';

import Logo from './../../assets/logo/bso_logo.png';

export const Header = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const { isLogin, user } = useAppSelector(state => state.user);

    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        if (location.pathname !== `/${RoutesPath.Login}` && location.pathname !== `/${RoutesPath.Register}`) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);

    const NavAuthorized = () => (
        <>
            <span className="header__username text-white">Добро пожаловать, {user?.username}!</span>
            <Link to={`/${RoutesPath.Cart}`} className="text-dark">
                <Button className="header__button">Корзина</Button>
            </Link>
            <Button
                className="header__button"
                onClick={() => {
                    dispatch(logout());
                    window.location.reload();
                }}
            >
                Выйти
            </Button>
        </>
    );

    if (!showHeader) return null;

    return (
        <Navbar bg="dark" className="mb-3 p-3" expand="lg">
            <Container className="justify-content-between">
                <Link to={'/'}>
                    <Navbar.Brand>
                        <img src={Logo} height="50" alt="BSO" />
                    </Navbar.Brand>
                </Link>

                <div>
                    {isLogin ? (
                        <NavAuthorized />
                    ) : (
                        <Link to={`/${RoutesPath.Login}`} className="text-dark">
                            <Button className="header__button">Войти</Button>
                        </Link>
                    )}
                </div>
            </Container>
        </Navbar>
    );
};
