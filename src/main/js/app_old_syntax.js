var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


var ReactApp = React.createClass({
  renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className='center'>โหวตสาว มทส.</div>
        <div className='right'>
                <Ons.ToolbarButton>
                    <Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
                </Ons.ToolbarButton>
              </div>
      </Ons.Toolbar>
    )
  },

  render: function() {

   function handleClick(id,point) {
        return function () {
            client({method: 'GET', path: '/vote/'+id+'/point/'+point}).done(
                ons.notification.alert('Voted!')
        )}
    }
    return(
      <Ons.Page renderToolbar={this.renderToolbar}>
      <Ons.Card>
        <img src={"img/01.jpg"} alt="Onsen UI" style={{width: '100%'}} />
        <div className="title right">อุ้ย สาสุข</div>
        <div className="content">
          <Ons.List>
            <Ons.ListHeader>
            <Ons.Icon icon='heartbeat' />
            &nbsp;&nbsp;Heart
            </Ons.ListHeader>
            <Ons.ListItem onClick={handleClick(1,1)}>
              <Ons.Icon style={{color: 'red'}} icon='heart' />
            </Ons.ListItem>
            <Ons.ListItem onClick={handleClick(1,2)}>
            <Ons.Icon style={{color: 'red'}} icon='heart' />
            <Ons.Icon style={{color: 'red'}} icon='heart' />
          </Ons.ListItem>
          <Ons.ListItem onClick={handleClick(1,3)}>
            <Ons.Icon style={{color: 'red'}} icon='heart' />
            <Ons.Icon style={{color: 'red'}} icon='heart' />
            <Ons.Icon style={{color: 'red'}} icon='heart' />
          </Ons.ListItem>
          </Ons.List>
          <br/>
          <Ons.Button><Ons.Icon icon="ion-share"></Ons.Icon> วาร์ป</Ons.Button>
        </div>
      </Ons.Card>

      <Ons.Card>
      <img src={"img/02.jpg"} alt="Onsen UI" style={{width: '100%'}} />
      <div className="title right">เวนิส พยาบาล</div>
      <div className="content">
        <Ons.List>
          <Ons.ListHeader>
          <Ons.Icon icon='heartbeat' />
          &nbsp;&nbsp;Heart
          </Ons.ListHeader>
          <Ons.ListItem onClick={handleClick(2,1)}>
            <Ons.Icon style={{color: 'red'}} icon='heart' />
          </Ons.ListItem>
          <Ons.ListItem onClick={handleClick(2,2)}>
          <Ons.Icon style={{color: 'red'}} icon='heart' />
          <Ons.Icon style={{color: 'red'}} icon='heart' />
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(2,3)}>
          <Ons.Icon style={{color: 'red'}} icon='heart' />
          <Ons.Icon style={{color: 'red'}} icon='heart' />
          <Ons.Icon style={{color: 'red'}} icon='heart' />
        </Ons.ListItem>
        </Ons.List>
        <br/>
        <Ons.Button><Ons.Icon icon="ion-share"></Ons.Icon> วาร์ป</Ons.Button>
      </div>
      </Ons.Card>
      </Ons.Page>
    )
  }
});

ReactDOM.render(<ReactApp />, document.getElementById('react'));