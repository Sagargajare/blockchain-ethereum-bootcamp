import React from 'react'
const Layout = (props) => {
  return (
      <div>
            <h1>I am a Header</h1>
            { props.children }
        
      </div>
    );
};
export default Layout;

