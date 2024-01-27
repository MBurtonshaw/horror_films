import { React, createContext, Component } from "react";
import movies from '../movies.json';
import Data from '../HOCs/data';
import Cookies from 'js-cookie';
const bcrypt = require('bcryptjs');

export const Context = createContext(''); 

export class Provider extends Component {

  constructor() {
    super();
    // variable to initialize a new function imported from /HOCS/data
    this.data = new Data();
    this.cookie = Cookies.get( 'signedin?' );
    this.state = {
      user: this.cookie ? JSON.parse( this.cookie ) : null
    }
  }
    
    state = {
      user: null,
      error: null
    }
    


    render() {
      const { user } = this.state;
      // any of these values will be available to components connected to context
      const value = {
        user,
        data: {
          movies
        },
        actions: {
          removeDuplicates: this.removeDuplicates,
          capitalizeFirstLetter: this.capitalizeFirstLetter,
          getMessage: this.getMessage,
          signIn: this.signIn,
          signOut: this.signOut,
          registerUser: this.registerUser
        }
      }
      
      return (
        <Context.Provider value={ value }>
          { this.props.children }
        </Context.Provider>  
      );
    }

    removeDuplicates = ( arr ) => { 
      let unique = []; 
      arr.forEach(element => { 
        if ( !unique.includes(element) ) { 
          unique.push( element ); 
        } 
    })
    return unique; 
  } 

  capitalizeFirstLetter = ( string ) => {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }

  getMessage = async() => {
    try {
      // using the getMessage function from /HOCs/data
      let note = await this.data.getMessage();
      //setting the response to state (Provider component)
      return note;
    } catch(error) {
      this.setState({
        error
      });
    }
  }

  registerUser = async ( firstName, emailAddress, passphrase ) => {
      //Set user credentials and save to a cookie
      let user = {
        name: firstName,
        email: emailAddress,
        password: passphrase
      }
      Cookies.set(`user: ${emailAddress}`, JSON.stringify( user ), { expires: 7} );
    //}
  }

  signIn = async ( emailAddress, passphrase ) => {
      let applicant = Cookies.get(`user: ${emailAddress}`);
      if (applicant) {
        let newType = JSON.parse(applicant);
        let newPass = bcrypt.hash(passphrase);
        if (bcrypt.compare(newPass, newType.password)) {
          let user = {
            email: emailAddress,
            password: newPass
          }
          this.setState({user});
          Cookies.set( 'signedIn?', JSON.stringify( user ), { expires: 7} );
        } else {
          console.log('Invalid Password')
        }
      } else {
        console.log('Not Found')
      }
      //Set user credentials and save to a cookie
      
    
    //}
  }

  signOut = async () => {
      let user = {
        email: '',
        password: ''
      }
      this.setState({user});
      Cookies.set( 'signedIn?', JSON.stringify( '' ), { expires: 7} );
    //}
  }

}
export const Consumer = Context.Consumer;
/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param { class } Component - A React component.
 * @returns { function } A higher-order component.
 */

export default function withContext( Component ) {
  return function ContextComponent( props ) {
    return (
      <Context.Consumer>
        { context => <Component { ...props } context={ context } />}
      </Context.Consumer>
    );
  }
}


