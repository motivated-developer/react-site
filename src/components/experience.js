import { display } from '@mui/system';
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>

        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>
            <img
              className={this.props.image ? '' : 'display-none'}
              alt="myimage"
              src={this.props.image}
              style={{ height: '50px' }}
            />

            {'    ' + this.props.jobName}
          </h4>
          <p>{'> ' + this.props.jobDescription}</p>
          <p className={this.props.jobDescription2 ? '' : 'display-none'}>
            {'> ' + this.props.jobDescription2}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
