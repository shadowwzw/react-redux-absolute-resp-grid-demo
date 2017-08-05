import React from 'react';
import './error.css';

const Error = ({message}) => (<div className="error">Возникла ошибка: {message || "неизвестная ошибка"}</div>);

export default Error;