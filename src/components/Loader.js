import React from 'react';
import './loader.css';

export default ({ enabled }) => enabled ? <div className="loader" /> : null;