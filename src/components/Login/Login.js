import React, { useCallback, useState } from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useDispatch } from "react-redux";
import { changeIsAuthed } from "../../store/actions/login";
import { useHistory } from "react-router";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleLogin = useCallback(() => {
        dispatch(changeIsAuthed(true));
        history.push('/');
        localStorage.setItem('isAuthed', true);
    }, [dispatch, history]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setLoginError('');
        setPasswordError('');

        const emailRegExp = /.+@.+\..+/i;
        const passwordRegExp = /[а-я]/i;

        if (!emailRegExp.test(email)) {
            setLoginError('Вы ввели адрес почты некорректного формата');
            return;
        }

        if (passwordRegExp.test(password) || password.length < 8) {
            setPasswordError('Пароль должен содержать не менее 8 символов без использования кириллицы');
            return;
        }

        handleLogin();
        setEmail('');
        setPassword('');
    }, [email, handleLogin, password])

    return (
        <main className="app__main main">
            <section className="login">
                <div className="login__wrapper">
                    <form
                        className="login__form login-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="login-form__inner">
                            <h2 className="login-form__title title title_bordered">simple hotel check</h2>
                            <Input
                                className="login-form__input"
                                error={loginError}
                                onChange={handleEmailChange}
                                text="Логин"
                                type="text"
                                value={email}
                            />
                            <Input
                                className="login-form__input"
                                error={passwordError}
                                onChange={handlePasswordChange}
                                text="Пароль"
                                type="text"
                                value={password}
                            />
                            <Button
                                className="login-form__button form-button"
                                text="Войти"
                                type="submit"
                            />
                        </div>
                    </form >
                </div>
            </section>
        </main>
    )
}