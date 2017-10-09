// var React = require('react');
 import ReactDOM from'react-dom';
 import {
        Toolbar,
        Page,
        ToolbarButton,
        Icon,
        Card,
        ListHeader,
        ListItem,
        List,
        Button,
         
 } from 'react-onsenui'
 import client from './client'
 import ons from 'onsenui';
import React, { Component } from 'react'
export default class App extends Component {
constructor(){
  super()
  this.handleClick =this.handleClick.bind(this);
}
componentDidMount(){
    console.log("Hi React");
  }
  toolbar(){
    return(
      <Toolbar>
         <div className='center'>Onsen UI</div>
         <ToolbarButton>
           <Icon icon='ion-navicon, material:md-menu'></Icon>
         </ToolbarButton>
      </Toolbar>
    )
  }
  handleClick(id,point){
     client({method: 'GET', path: '/vote/'+id+'/point/'+point}).done(
                ons.notification.alert('Voted!')
              )
  }
  render() {
    return (
      <div>
          <Page renderToolbar={this.toolbar}>
          <Card>
              <img src={"img/01.jpg"} alt="Onsen UI" style={{width: '100%'}} />
              <div className="title right">อุ้ย สาสุข</div>
              <div className="content">
          <List>
            <ListHeader>
               <Icon icon='heartbeat' />
            &nbsp;&nbsp;Heart
            </ListHeader>
            <ListItem onClick={()=>this.handleClick(1,1)}>
              <Icon style={{color: 'red'}} icon='heart' />
            </ListItem>
            <ListItem onClick={()=>this.handleClick(1,2)}>
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
          </ListItem>
          <ListItem onClick={()=>this.handleClick(1,3)}>
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
          </ListItem>
          </List>
          <br/>
          <Button><Icon icon="ion-share"></Icon> วาร์ป</Button>
        </div>
      </Card>
      <Card>
              <img src={"img/02.jpg"} alt="Onsen UI" style={{width: '100%'}} />
              <div className="title right">เวนิส พยาบาล</div>
              <div className="content">
          <List>
            <ListHeader>
               <Icon icon='heartbeat' />
            &nbsp;&nbsp;Heart
            </ListHeader>
            <ListItem onClick={()=>this.handleClick(1,1)}>
              <Icon style={{color: 'red'}} icon='heart' />
            </ListItem>
            <ListItem onClick={()=>this.handleClick(1,2)}>
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
          </ListItem>
          <ListItem onClick={()=>this.handleClick(1,3)}>
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
              <Icon style={{color: 'red'}} icon='heart' />
          </ListItem>
          </List>
          <br/>
          <Button><Icon icon="ion-share"></Icon> วาร์ป</Button>
        </div>
      </Card>
      </Page>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

