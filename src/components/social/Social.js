import React from 'react';
import './social.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component {
    render(){



        return (
        
            <div class="social-buttons">        
        <a href="https://www.facebook.com/Sowbhakya-Sai-Temple-101033925102596/" target="blank" class="social-margin"> 
          <div class="social-icon facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </a>
       
       
        <a href="https://www.youtube.com/channel/UCSHNP1KKUDINqThy7pUKFYQ" target="blank"  class="social-margin">
          <div class="social-icon youtube">
          <FontAwesomeIcon icon={faYoutube} />
          </div> 
        </a>
        
        
        <a href="http://twitter.com/" target="blank" class="social-margin">
          <div class="social-icon twitter">
          <FontAwesomeIcon icon={faTwitter} />
          </div> 
        </a>
</div>
    )
    }



     

  
}

export default Social;
