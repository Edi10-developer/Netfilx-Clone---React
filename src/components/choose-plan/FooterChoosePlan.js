import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

class FooterChoosePlan extends Component {
    render() {
        return (
            <FooterContainer>

                <div className="footer-wrapper">
                    <span
                        style={{ marginLeft: '10%', color: '#999' }}
                        className="question-link"
                    >Questions?&nbsp;
                    <Link style={{ color: '#999' }}>Call 1-877-742-1335</Link>
                    </span>
                    <div className="footer-columns">
                        <ul>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Link to="/">Help Center</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Link  to="/">Term of Use</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Link  to="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </FooterContainer>


        );
    }
}

export default FooterChoosePlan;

// Footer Container 
const FooterContainer = styled.div`
  display: grid;
  justify-content: center;
  background: #f3f3f3;
  padding: 1.875rem 0;
  margin-top: 10rem;
  position: relative;
  border-top: 1px #e6e6e6;
  z-index: 5;

  .footer-columns{
      width: 80%;
      margin: 1rem 3rem 0 3rem;
      color: #999;
      display: grid;
      grid-template-columns: repeat(4, 15.625rem);
      grid-gap: 0.3rem;
  }

  .footer-wrapper{
      margin: 0 auto;
      padding: 1.25rem;
      color: #999;
  }

  .question-link{
      margin-left: 3rem;
      font-size: 1rem;
      color: #999;
  }

  a{
      color: #999;
      font-size: 0.8125rem;
      &:hover{
          text-decoration: underline;
          cursor:pointer;
      }
  }

  ul {
      list-style-type: none;
  }
`;