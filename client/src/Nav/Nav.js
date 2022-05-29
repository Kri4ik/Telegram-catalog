import React from 'react';
import "./Nav.css";


class Nav extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }



  render(){
    return (
            <nav>
                <ul>
                    <li><a href="#"><i className="icon-phone"></i>Реєстрація</a></li>
                </ul>
            </nav>
      );
  }
}

export default Nav;
