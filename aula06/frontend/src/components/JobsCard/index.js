import React, { Component } from 'react';
import ImgJob from '../../img/job.png';

import './index.css';

export default class JobsCard extends Component{
    render() {
        return (
            <div className="jobsCard-container">
                <img src={ImgJob} alt=""/>
                <div className="jobsCard-desc">
                    <span>Dsenvolvedor React</span>
                    <p>
                        Vitória
                    </p>
                    <p>
                        LoboTech
                    </p>
                </div>
            </div>
        )
    }
}