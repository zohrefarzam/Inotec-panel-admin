import React from 'react'
import './HeaderLinks.styl'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { dashboardRoutes } from '../../../router/routes'
import { Notifications as NotificationsIcon } from '@material-ui/icons'
const HeaderLinks = ({ user, rootStore }) =>


  user ? (
    
    <div className="header-links" >
        
         <button style={{marginHorizontal: '30%',}} >
      <NotificationsIcon />
      </button>
     
    
      <Link
        className="header-links__change-password"
        to={dashboardRoutes.changePassword.path}
      >
          تغییر رمز عبور
      </Link>
      <button type="button" onClick={rootStore.logOut}>
              /  خروج
      </button>
     
    </div>
  ) : null
 

export default inject('rootStore')(observer(HeaderLinks))
