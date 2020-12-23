import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return (
      <div className="aboutme-page">
        <Grid className="aboutme-background">
          <Cell col={9}>
            <br></br>
            <h2 className="about-me-header">Ambitious & Motivated</h2>
            <h4 className="about-me-header" style={{padding: '40px'}}>
              Currently finishing my duel degree in Computer Systems Engineering and German.  
              I love a fast paced and cutting edge environment, and that's how I found programming.  
              With each new project or internship, I immerse myself in a new technology and figure it out.  
              Besides programming, I study German and love learning about new cultures and meeting new people.  
              After work you can find me playing sports or working out, or playing with my three dogs.  
            </h4>
          </Cell>
          <Cell col={3} >
            <div>
              <img
                alt="myimage"
                src={"https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/s320x320/90023994_205237570725091_3920293921262927872_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_ohc=px9I9W-8HqUAX9htIRQ&tp=1&oh=ab0aac951f6e41660e2f18bb5b154883&oe=6005D897"}
                style={{ height: "300px", borderRadius: '200px', padding: '20px' }} />
              <h3 className='about-me-header'>
                Ryan Charnoky
              </h3>
            </div>
          </Cell>
        </Grid>
        <hr style={{ borderTop: '3px solid #e22947' }} />
        <Grid style={{padding: '0px'}}>
        <img
              src="https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg"
              alt="avatar"
              style={{height: '190px', width: '100%'}}
               />
        </Grid>
      </div>
    )
  }
}

export default About;
