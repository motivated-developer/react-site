import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              /> */}
            </div>
            <h1 style={{ paddingTop: '2em' }}>Ryan Charnoky</h1>
            <h3 style={{ color: 'gray' }}>Front End Developer</h3>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Motivated young professional ready to make an impact in the
              technology industry.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            {/* <h5>Address</h5>
            <p>1 Hacker Way, Menlo Park, 94025</p> */}
            {/* <h5>Phone</h5>
            <p>(407) 421-****</p> */}
            <h5>Email</h5>
            <p>rcharnoky@gmail.com</p>
            <h5>Web</h5>
            <p>https://unruffled-yonath-e1bcf6.netlify.app</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={''}
              endYear={'Graduate in May 2021'}
              schoolName="The University of Georgia"
              schoolDescription="Duel Degree Program: 1. Computer Systems Enginieering 2. German"
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Karlsruhe Institute of Technology"
              schoolDescription="Study aborad in Karlsruhe, Germany"
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={'November 2021'}
              endYear={'Present'}
              image={
                'https://www.xing.com/imagecache/public/scaled_original_image/eyJ1dWlkIjoiMDczNmE5NzctOTY2ZS00YTU4LWE5YzItNGVmYTkzMDQzNWRkIiwiYXBwX2NvbnRleHQiOiJlbnRpdHktcGFnZXMiLCJtYXhfd2lkdGgiOjMyMCwibWF4X2hlaWdodCI6MzIwfQ?signature=551e3494d4cbd873a7352661df62c54c3d67f9bee5bf2d915032a8e1675ea993'
              }
              jobName="Front End Developer"
              jobDescription="Designed, created and maintained an extension and unit tests for our Process Mining Template App in TypeScript/React/HTML5 resulting in greatly improved customer usability and satisfaction"
              jobDescription2="Wrote, edited, and voiced scripts for a learning platform, explaining complex technical concepts to non-technical business users              "
            />

            <Experience
              startYear={'August 2020'}
              endYear={'November 2021'}
              image={
                'https://media-exp1.licdn.com/dms/image/C4E0BAQGTauY_OLxh_Q/company-logo_200_200/0/1591016181345?e=2147483647&v=beta&t=-NTDVo1Pu9Nk6VEBzaqhvAKu8dMIusESza3sIaysL0E'
              }
              jobName="Option 1 Partners - Consultant Intern"
              jobDescription="Designed and maintained five pages on the company’s WordPress site and the company LinkedIn page"
            />

            <Experience
              startYear={'June 2019'}
              endYear={'July 2019'}
              image={
                'data:image/png;base64,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'
              }
              jobName="First Data/Fiserv - Front End Developer"
              jobDescription="Worked on an internal web application in TypeScript/React/SASS to replace the legacy system"
              jobDescription2="Learned about working in a software team on a large application, including Git and Webpack"
            />

            <Experience
              startYear={'December 2018'}
              endYear={'February 2019'}
              image={''}
              jobName="Personal Project - Location Finder"
              jobDescription="Developed a service to locate the nearest Alcoholics Anonymous meeting location using a relational database, the Twilio API, AWS, SQL, and Python"
            />

            <Experience
              startYear={'September 2018'}
              endYear={'November 2018'}
              image={
                'data:image/png;base64,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'
              }
              jobName="UGA Idea Accelerator Finalist"
              jobDescription="Worked with over 80 stakeholders to fully understand their business challenges"
              jobDescription2="Translated stakeholder business problems into technical solutions, constantly iterating to improve the solution"
            />

            <Experience
              startYear={'May 2018'}
              endYear={'July 2018'}
              image={
                'data:image/png;base64,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'
              }
              jobName="Genuine Parts Company (NAPA Auto Parts) - Store Systems Development Intern"
              jobDescription="Drove time saving processes by writing automated BDD QA test scripts using Cucumber, Gherkin, and Selenium to test four pages on our application"
              jobDescription2="Developed a passion for web development by learning HTML, CSS, and AngularJS to debug and develop an internal web application"
            />

            <Experience
              startYear={'July 2017'}
              endYear={'May 2018'}
              image={
                'https://pbs.twimg.com/profile_images/875392923990282240/tutWUKak_400x400.jpg'
              }
              jobName="The University of Georgia - Residential Assistant"
              jobDescription="Served as a leader for 29 first year students by providing campus resources and social programs"
              jobDescription2="Worked with a team of 38 staff members to brainstorm and execute community building activities"
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Skills</h2>

            <Skills skill="Javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="React" progress={70} />
            <Skills skill="Flutter" progress={40} />
            <Skills skill="Qlik Sense" progress={65} />
            <Skills skill="Jest" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
