import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert2'; 
import LoginData from './LoginData';



function BasicAlerts() {
  return (
    <div>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          html
          text={renderToStaticMarkup(<LoginData />)}
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
  )
}

export default BasicAlerts