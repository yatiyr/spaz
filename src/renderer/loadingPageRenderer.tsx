/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/loadingPage.scss';

import Search from '../../public/img/icons/spaz_icon.svg';

ReactDOM.render(<div className="loadingPage">
                    <Search className="icon"/>
                    <div className="text">Loading Spaz Simulation Runner</div>
                </div>, document.getElementById('root'));
