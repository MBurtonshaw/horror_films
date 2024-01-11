import { React, createContext, Component } from "react";
import movies from '../movies.json';

export const Context = createContext(''); 

export class Provider extends Component {
  
    render() {
      const value = {
        data: {
          movies
        },
        actions: {
          removeDuplicates: this.removeDuplicates,
          capitalizeFirstLetter: this.capitalizeFirstLetter
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


