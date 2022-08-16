import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://camo.githubusercontent.com/865ca0be0c737e9c12ed0abd5afd870929a86ec4d527cdc0f0c06ba93ec556d8/68747470733a2f2f692e696d6775722e636f6d2f6b5268657457432e706e67) center / 80px no-repeat',
              }}
            ></CardTitle>
            <CardText>`Personal website (this website)`</CardText>
            <CardActions className="button-area" border>
              <Button colored href="https://github.com/Oreo59/revival-app">
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              DynastyDawgs Website
            </CardTitle>
            <CardText>Fantasy Football Website</CardText>
            <CardActions className="button-area" border>
              <Button
                colored
                href="https://github.com/motivated-developer/dynastyDawgs"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://shiny-kringle-42e668.netlify.app/leagueoverview"
              >
                Visit Site
              </Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>Coming soon</CardText>
            <CardActions className="button-area" border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background: 'url() center / 80px no-repeat',
              }}
            ></CardTitle>
            <CardText>Coaches app project to learn Vue</CardText>
            <CardActions className="button-area" border>
              <Button
                colored
                href="https://github.com/motivated-developer/coaches-app"
              >
                GitHub
              </Button>
              {/* <Button colored>Visit Site</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://camo.githubusercontent.com/c76b1b55615ece4f4ca8feed725b8e4d5ad334c5ce4ddc27cd4bbcef780b168f/68747470733a2f2f692e696d6775722e636f6d2f663239454339712e706e67) center / 80px no-repeat',
              }}
            ></CardTitle>
            <CardText>
              E-Commerce app for Revival Apparel Co. built in Flutter
            </CardText>
            <CardActions className="button-area" border>
              <Button colored href="https://github.com/Oreo59/revival-app">
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://camo.githubusercontent.com/fc674143f7b7d91b9c4b01f56deec3ddfa51032a7ee51aafc5cca87600d8c01a/687474703a2f2f672e7265636f726469742e636f2f543174445353416474742e676966) center / 80px no-repeat',
              }}
            ></CardTitle>
            <CardText>Ecommerce app</CardText>
            <CardActions className="button-area" border>
              <Button
                colored
                href="https://github.com/motivated-developer/shop-app"
              >
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              Flutter Project #3
            </CardTitle>
            <CardText>Coming soon</CardText>
            <CardActions className="button-area" border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Coming soon</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>Flutter</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
