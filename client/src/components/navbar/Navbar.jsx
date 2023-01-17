import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
      <div className="flex jc-center navbar">
          <div className="flex al-center navContainer">
              <span>Nicolas Booking</span>
              <div className="flex navItems">
                  <button>Register</button>
                  <button>Login</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar