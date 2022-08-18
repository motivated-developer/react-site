import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ryan Charnoky</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Email is the best way to reach me
            </p> */}
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +1 (407) 111-1111
                  </ListItemContent>
                </ListItem> */}

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    rcharnoky@gmail.com
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
