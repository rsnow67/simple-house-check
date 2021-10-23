import React, { useState } from "react";
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleEmailChange = (event) => setEmail(event.target.value);
	const handlePasswordChange = (event) => setPassword(event.target.value);

	const handleLogin = () => { };

	const handleSubmit = (event) => {
		event.preventDefault();
		setError('');
		if (!email) {
			setError('Вы не ввели адрес электронной почты');
			return;
		}
		if (!password) {
			setError('Вы не ввели пароль');
			return;
		}
		handleLogin();
		setEmail('');
		setPassword('');
	}

	return (
		<section className="login">
			<div className="login__wrapper">
				<form className="login__form login-form">
					<div className="login-form__inner">
						<h2 className="login-form__title">simple hotel check</h2>
						<Input
							className="login-form__input"
							onChange={handleEmailChange}
							text="логин"
							type="email"
							value={email}
						/>
						<Input
							className="login-form__input"
							onChange={handlePasswordChange}
							text="пароль"
							type="text"
							value={password}
						/>
						<Button
							className="login-form__button login-button"
							text="войти"
						/>
					</div>
				</form >
			</div>
		</section>
	)
}