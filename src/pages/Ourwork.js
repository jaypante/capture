import React from 'react'
import styled from 'styled-components'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {Link} from 'react-router-dom'

const Ourwork = () => {
  return (
    
    <Work>
      <Movie>
      <h2>The Athlete</h2>
      <div className='line'></div>
      <Link>
        <img src={athlete} alt="athlete"/>
      </Link>
      </Movie>
      <Movie>
      <h2>The Racer</h2>
      <div className='line'></div>
      <Link>
        <img src={theracer} alt="theracer"/>
      </Link>
      </Movie>
      <Movie>
      <h2>The Goodtimes</h2>
      <div className='line'></div>
      <Link>
        <img src={goodtimes} alt="goodtimes"/>
      </Link>
      </Movie>
    </Work>
  )
}
const Work = styled.div`
  min-height: 100vh;
  
`;
const Movie = styled.div`
  padding-bottom:10rem;
`;
export default Ourwork