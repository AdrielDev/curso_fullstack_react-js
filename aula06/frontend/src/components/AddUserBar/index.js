import React, { Component } from 'react';

import './index.css';

export default class AddUserBar extends Component {
    render() {
        return (
            <div className="addUserBar-container">
                <span>Cadastro de Desenvolvedor</span>
                <button type="submit">Cadastrar</button>

                <span>Informações</span>
                <p>
                    Este é um app desenvolvido o curso de React.js 
                    com o objetivo de cadastrar desenvolvedores do 
                    GitHub para que os mesmos possam encontrar vagas de emprego.
                </p>
            </div>
        )
    }
}