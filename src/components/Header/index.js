import React from 'react';
import './styles.css';
import logo from '../../assets/logoFlix.png';
import logoGithub from '../../assets/logotipo-do-github.svg'

export default ({ black }) => {
    const urlGithub = "https://github.com/Joyce19Mello?tab=repositories"
    return (
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <img src={logo} />
            </div>
            <div className="header--user">
                <a style={{ padding: '12px' }} href={urlGithub} target="_blank">
                    <img src={logoGithub} />
                </a>
                <a>
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
                </a>
            </div>
        </header>
    )
}