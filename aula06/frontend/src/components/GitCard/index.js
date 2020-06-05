import React, { Component } from 'react';
import './index.css';
import api from '../../services/api';

export default class GitCard extends Component {
    state = {
        dados: [],
    }

    async loadData() {
        const response = await api.get('/users');
        this.setState({ dados: response.data })
    }

    //Executa assim que renderiza tudo;
    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="main-container">
                {
                    this.state.dados.map(d => (
                        <a href={`/detail/${d._id}`}>
                            <div className='card' key={d._id}>
                                <img src={d.avatar_url} alt="" id="avatar" />
                                <div id='info'>
                                    <span><b>Nome:</b> {d.name}</span>
                                    <p><b>Company:</b> {d.company}</p>
                                    <p><b>Bio:</b> {d.bio}</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        )
    }
}