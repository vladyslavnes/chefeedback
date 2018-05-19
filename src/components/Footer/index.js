import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            	<div className="container"> 
            		<div className="min-container">               
	               		<p>
	                		CheFeedback
	                	</p>
	                

	                	<div class="social">
	                		<ul>
	                			<li><a href="#"><img src={require("../../../assets/images/fb-white.png")} alt="" /></a></li>
	                			<li><a href="#"><img src={require("../../../assets/images/instagram.png")} alt="" /></a></li>
	                		</ul>
	                	</div>

	                	<p class="copyright">
	                		Розроблено в DreamTeam
	                   	</p>
	                </div>   	
                </div>

            </footer>
        );
    }
}

export default Footer;
