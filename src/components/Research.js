import React from 'react';
import './css/Research.css';

const Research = () => {
    return (
        <section className="research">
            <h2>Research</h2>
            
            <div className="category">
                <h3>Journal Articles</h3>
                <ul>
                    <li>
                        <strong>PhaDOP: A Pharo framework for implementing software product lines using Delta-Oriented Programming and model-based engineering</strong><br />
                        *Journal of Computer Languages*, August 2024<br />
                        DOI: 10.1016/j.cola.2024.101283<br />
                        HAL: <a href="https://hal.science/hal-04599790" target="_blank" rel="noopener noreferrer">https://hal.science/hal-04599790</a><br />
                        Contributors: Boubou Thiam Niang, Giacomo Kahn, Yacine Ouzrout, Mustapha Derras, Jannik Laval
                    </li>
                    <li>
                        <strong>Data interoperability assessment, case of messaging‐based data exchanges</strong><br />
                        *Journal of Software: Evolution and Process*, February 2023<br />
                        DOI: 10.1002/smr.2538<br />
                        HAL: <a href="https://hal.science/hal-03980732" target="_blank" rel="noopener noreferrer">https://hal.science/hal-03980732</a><br />
                        Contributors: Jannik Laval, Nawel Amokrane, Boubou Thiam Niang, Mustapha Derras, Néjib Moalla
                    </li>
                </ul>
            </div>

            <div className="category">
                <h3>Conference Papers</h3>
                <ul>
                    <li>
                        <strong>Automatic Generation of Interoperability Connectors using Software Product Lines Engineering</strong><br />
                        *International Conference on Software Technologies (ICSOFT)*, July 2022<br />
                        HAL: <a href="https://hal.science/hal-03673588" target="_blank" rel="noopener noreferrer">https://hal.science/hal-03673588</a><br />
                        Contributors: Boubou Niang, Giacomo Kahn, Nawel Amokrane, Yacine Ouzrout, Hamza Sahli, Mustapha Derras, Jannik Laval
                    </li>
                    <li>
                        <strong>Towards the Generation of Interoperability Connectors using Software Product Line Engineering</strong><br />
                        *Conference en ingénierie du Logiciel (CiEL)*, June 2021<br />
                        HAL: <a href="https://hal.science/hal-03274478" target="_blank" rel="noopener noreferrer">https://hal.science/hal-03274478</a><br />
                        Contributors: Boubou T Niang, Giacomo Kahn, Nawel Amokrane, Yacine Ouzrout, Mustapha Derras, Jannik Laval
                    </li>
                </ul>
            </div>

            <div className="category">
                <h3>Workshop Papers</h3>
                <ul>
                    <li>
                        <strong>Using Moose platform for the implementation of a Software Product Line according to model-based Delta-Oriented Programming</strong><br />
                        *International Workshop on Smalltalk Technologies (IWST22)*, August 2022<br />
                        HAL: <a href="https://hal.science/hal-03816240" target="_blank" rel="noopener noreferrer">https://hal.science/hal-03816240</a><br />
                        Contributors: Boubou T Niang, Giacomo Kahn, Nawel Amokrane, Yacine Ouzrout, Mustapha Derras, Jannik Laval
                    </li>
                    <li>
                        <strong>Le projet Pulse : vers la supervision des échanges dans un système IoT</strong><br />
                        *ONGRES INFORSID -Atelier 2 : Évolution des SI : vers des SI pervasifs ?,* June 2021<br />
                        HAL: <a href="https://hal.science/hal-03250112" target="_blank" rel="noopener noreferrer">https://hal.science/hal-03250112</a><br />
                        Contributors: Jannik Laval, Boubou Thiam Niang, Imene Ghzaiel, Kenza Riahi, Baudouin Dafflon, Giacomo Kahn, Yacine Ouzrout
                    </li>
                </ul>
            </div>

            <div className="category">
                <h3>Ph.D. Thesis Manuscript</h3>
                <ul>
                    <li>
                        <strong>A Model-Driven Engineering and Software Product Line Engineering Approach to Support Interoperability in Evolving Information Systems</strong><br />
                        *Université Lyon 2*, Defense on 28/03/2024<br />
                        Discipline: Computer Science<br />
                        Doctoral School: InfoMaths ED512<br />
                        Laboratory: Decision and Information for Production Systems (DISP)<br />
                        <a href="https://theses.hal.science/tel-04690416" target="_blank" rel="noopener noreferrer">Access the thesis</a>
                    </li>
                </ul>
            </div>

        </section>
    );
};

export default Research;
