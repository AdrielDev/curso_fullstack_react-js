import React, { Component } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import './index.css';

export default class Detail extends Component {

    state = {
        dados: {}
    }

    async loadData() {
        //Pegar o que esta na url
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({ dados: response.data })
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="detail-container">
                    <div className="card">
                        <img id="avatar" src={this.state.dados.avatar_url} alt="" />
                        <div id="info">
                            <p><b>{this.state.dados.name}</b></p>
                            <p><b>Empresa:</b> {this.state.dados.company != null ? this.state.dados.company : 'Desempregado'}</p>
                            <p><b>Biografia:</b> {this.state.dados.bio}</p>
                            <p><b>Repositorios:</b> {this.state.dados.public_repos}</p>
                            <p><b>Seguidores:</b> {this.state.dados.followers}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}