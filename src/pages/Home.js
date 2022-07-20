import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';
import '../styles/Home.css';
import me from '../images/me.jpg';

function Home() {

  const imageLink = '../images/me.jpg';
  const imageLink2 = './images/me.jpg';
  const imageLink3 = 'me.jpg';

  return (
    <div className='home'>
      {/* About section */}
      <div className='about'>
        <div className='row'>
          <h2>Cole Silvernail</h2>
          <h3>Washington, DC · (321) 514-4369 · 
            <a href='mailto:colesilvernail@gmail.com'> colesilvernail@gmail.com</a>
          </h3>
        </div>
        <div className='prompt'>
          <p>blah blah software developer</p>
          <a href='https://www.linkedin.com/in/cole-silvernail/'><LinkedInIcon /></a>
          <a href='https://github.com/coleSil'><GithubIcon /></a>
          <a href='https://www.instagram.com/cole.sliversnail/'><Instagram /></a>
          <a href='mailto:colesilvernail@gmail.com'><EmailIcon /></a>
        </div>
        <div className='row'>
          <img alt='' source={(imageLink)} width="100" height="50" />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>put fe skills here</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>put be skills here</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>languages here</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;