import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Interest from './interest';

class About extends Component {
  render() {
    return (
      <div className="aboutme-page">
        <Grid className="aboutme-background">
          <Cell col={8}>
            <br></br>
            <h1 className="aboutme-header">Ryan Charnoky</h1>
            <h3 className="aboutme-header">Ambitious & Motivated</h3>
            <h4 className="aboutme-text">
              <br></br>
              Hi, I'm Ryan, a JavaScript developer currently living in Southwest
              Germany. During the day, I'm improving my skills every day in
              JavaScript and React as a Process Mining Consultant for MEHRWERK
              GmbH.
              <br></br>
              <br></br>I thrive in a fast paced environment where I'm constantly
              learning, and that's how I fell in love with programming. With
              each new project, I'm immersed in a new technology and set of
              challenges, which become opportunities to learn more. During my
              time as a developer, I've become better at approaching a problem
              and learning strategies to overcome new obsticles.
              <br></br>
              <br></br>
              Outside of my day job, you can find me in the gym lifting weights
              or playing basketball. On weekends I love travelling and learning
              about new cultures, one of the reasons I made the move to Europe.
              Through travel and living in a foreign country for three years,
              I've gained valuable life experiences and learned so much about
              myself and gained so many more perspectives about the world.
            </h4>
          </Cell>
          <Cell col={4}>
            <div className="aboutme-header">
              <img
                alt="myimage"
                src={
                  'https://media-exp1.licdn.com/dms/image/C4D03AQHP_Bb902uNlQ/profile-displayphoto-shrink_800_800/0/1629059064645?e=1663200000&v=beta&t=2iLj3q5_J5JimeRc8JD8CSAdw5LPrqDxJN3TnTMFkVg'
                }
                style={{
                  height: '300px',
                  borderRadius: '200px',
                  padding: '20px',
                }}
              />
            </div>
            <h3 className="aboutme-header">Additional Interests</h3>
            <Interest
              title="German"
              text="I can speak German at a C1 level, as I've lived in Germany for about two years. I also have a Bachelor of Arts in German from my University. "
            ></Interest>
            <Interest
              title="Startup"
              text="I founded a startup company during a startup accelerator in University, including writing a business plan, narrowing down a target customer, and cold calling potential customers for research"
            ></Interest>
            <Interest
              title="Boy Scouts"
              text="I was a member of the Boy Scouts of America during my childhood, achieving the rank of Eagle Scout"
            ></Interest>
            <Interest
              title="Tuba"
              text="I played the tuba in high school, and dabbled in the upright bass and string bass. But I haven't touched it since"
            ></Interest>
            <Interest
              title="Ultimate Frisbee"
              text="I played ultimate frisbee at my University for four years"
            ></Interest>
            <Interest
              title="Toastmasters"
              text="I took interest in becoming a better public speaker and communicator in college, becoming an active participant in my university's Toastmasters club"
            ></Interest>
            <Interest
              title="Dogs"
              text="I've grown up with dogs my whole life, so dogs > cats"
            ></Interest>
            <Interest
              title="Most Rewarding Life Experience"
              text="My year abroad studying in Germany in 2019"
            ></Interest>
          </Cell>
        </Grid>
        <hr style={{ borderTop: '3px solid #e22947' }} />
        <Grid style={{ padding: '0px' }}>
          <img
            src="https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg"
            alt="avatar"
            style={{ height: '190px', width: '100%' }}
          />
        </Grid>
      </div>
    );
  }
}

export default About;
