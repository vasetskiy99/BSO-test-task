import { Alert, Button, Card, Form } from 'react-bootstrap';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { space } from '@constants/constants';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { getCartAsync } from '@store/slices/cart/cart';
import { loginAsync } from '@store/slices/user/user';
import { RoutesPath } from '@utils/routes-path';

import Logo from './../assets/logo/bso_logo_black.png';

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const { error } = useAppSelector(reducer => reducer.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async data => {
        const { login, password } = data;

        await dispatch(loginAsync({ identifier: login, password }));
        await dispatch(getCartAsync());
    };

    return (
        <div className="auth-container">
            <Card className="auth-card shadow p-3 mb-5 bg-body rounded">
                <Link className="m-4 auth-logo" to={`/${RoutesPath.Home}`}>
                    <img className="auth-logo__image" src={Logo} alt="logo" />
                </Link>
                <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mt-2" controlId="formBasicUsername">
                        <Form.Label>Имя пользователя:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите имя пользователя"
                            {...register('login', { required: true })}
                        />
                        {errors.login?.message && (
                            <Form.Text className="text-danger">{errors.login.message.toString()}</Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mt-2" controlId="formBasicPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: 'Пароль должен содержать минимум 8 символов',
                                },
                            })}
                        />
                        {errors.password?.message && (
                            <Form.Text className="text-danger">{errors.password.message?.toString()}</Form.Text>
                        )}

                        {error.message && (
                            <Alert className="mt-2 mb-0" variant="danger">
                                {error.message}
                            </Alert>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-5">
                        Войти
                    </Button>
                </Form>
                <div className="d-flex justify-content-center mt-2">
                    <span>У вас нет учетной записи?</span>
                    <Link className="auth-link" to={`/${RoutesPath.Register}`}>
                        {space}Регистрация
                    </Link>
                </div>
            </Card>
        </div>
    );
};
