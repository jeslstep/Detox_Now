import React, { Component } from 'react';
import {connect} from 'react-redux';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';
// material ui 
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UserLoginNav from '../UserLoginNav/UserLoginNav';
import ButtonAppBar from '../UserLoginNav/ButtonAppBar';


const style = {
    root: {
      color: '#ffffff',
      backgroundColor: '#16233c',
      width: 140,
      margin: 8,
    },
}

export class DetoxCenterLogin extends Component {

       // Renders the entire app on the DOM
       componentDidMount() {
         this.getDetoxInfo();
       }

       // getContacts dispatches a call to get contacts 
       getDetoxInfo = (event) => {
         this.props.dispatch({
           type: 'GET_DETOX_INFO_BY_ID',
           payload: this.props.reduxState.user.id
         });
       }


  render() {
    return (
      <div>
        <ButtonAppBar/>
               <section className="App-header">
                <div>
                    {/* city skylinee outline image in current directory */}
                    <img 
                    src={dtnow_skline_mobile} 
                    alt="city outline"/>
                </div>
        </section>
        <section className="grayBackground">
        <center>
         <Card id="card">
           {this.props.reduxState.detoxInfo.map(info => (
             <div key={info.detox_id}>
           <h1 className="center2">{info.detox_center_name}</h1>
           </div>
           ))}
            <CardContent> 
              <table align="center">
                <thead>
                  <tr>
                  <th>Max Bed Count</th><th>Current Bed Count</th>
                  </tr>
                </thead>
            {this.props.reduxState.detoxInfo.map(info => ( 
                <tbody key= {info.id} align="center" >
                  <tr>
                    <td>{info.total_bed_count}</td> 
                    <td>{info.current_bed_count}</td>
                    </tr>
                  </tbody>
                    ))}
              </table>
            </CardContent>
              <div className="detoxCenterBtn">
                 <CardActions>
                  <Button
                 size="large"
                    style={style.root}
                  onClick={() => {this.props.dispatch({type: 'INCREASE', payload: this.props.reduxState.user.id})
                  this.getDetoxInfo();
                  }}
                  >
                    Increase
                  </Button>
                  <Button
                     size="large"
                    style={style.root}
                    onClick={() => {this.props.dispatch({type: 'DECREASE', payload: this.props.reduxState.user.id})
                    this.getDetoxInfo();
                    }}
                  >
                    Decrease
                  </Button>
                </CardActions>
                   </div>
             </Card>
             </center>
             </section>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(DetoxCenterLogin);
