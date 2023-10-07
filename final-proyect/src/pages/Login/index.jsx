import React, { useState } from 'react';

const Login = (props) => {
    const { loggedIn, email } = props;
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la lógica de inicio de sesión
        console.log('Formulario enviado:', formData);
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="text-center">
                        <h1 className="mb-4">Hola!</h1>
                        <p>Ingresa con tus datos</p>
                        <form onSubmit={onFormSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario o correo electrónico"
                                    name="username"
                                    value={formData.username}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={formData.password}
                                    onChange={onInputChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                {loggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
                            </button>
                        </form>
                        {loggedIn && <div className="mt-3">Tu dirección de correo electrónico es {email}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
