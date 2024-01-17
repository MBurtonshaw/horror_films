import { React, createContext, Component } from "react";
import movies from '../movies.json';
import Data from '../HOCs/data';

export const Context = createContext(''); 

export class Provider extends Component {

  constructor() {
    super();
    // variable to initialize a new function imported from /HOCS/data
    this.data = new Data();

  }

    state = {}
    


    render() {
      // any of these values will be available to components connected to context
      const value = {
        data: {
          movies
        },
        actions: {
          removeDuplicates: this.removeDuplicates,
          capitalizeFirstLetter: this.capitalizeFirstLetter,
          getMessage: this.getMessage
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


