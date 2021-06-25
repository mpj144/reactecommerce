import React from 'react';

import './footer.css';

const Footer = () => (
    <footer className="app-footer">
        <span className="app-footer__message">
            <div id="criadores">
                        <ul>
                            <i class="em em-heart" aria-role="presentation" aria-label="HEAVY BLACK HEART"></i>
                         <h3>Criado por: </h3> 
                         <li><a href="mailto:danielelennertz@gmail.com" rel="author">Daniel Lennertz</a></li>
                         <li><a href="mailto:gustavomellado555@gmail.com" rel="author">Gustavo Mellado</a></li>
                         <li><a href="mailto:alan.s.schmitz@gmail.com" rel="author">Alan Schmitz</a></li>
                         <li><a href="mailto:biancainacio@gmail.com" rel="author">Bianca Inacio</a></li>
                         <li><a href="mailto:cintiauberaba@gmail.com" rel="author">Cintia Uberada</a></li>
                         <li><a href="mailto:marcelopjrdev@gmail.com" rel="author">Marcelo Pires</a></li>
                        </ul>
                    </div>
        </span>
    </footer>
)

export default Footer