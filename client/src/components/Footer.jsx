import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4 px-4 lg:px-44 py-3 text-center sm:text-left'>

        {/* Logo + Vertical Line */}
        <div className="flex items-center">
            <img width={150} src={assets.logo} alt="Company Logo" />
            <div className="border-l border-gray-400 h-6 ml-8 pl-4"></div>
        </div>

        {/* Footer Text */}
        <p className="flex-1 items-center text-sm text-gray-500 hidden sm:block">
            Copyright © Durgesh Singh Chauhan | All rights reserved.
        </p>

        {/* Social Icons */}
        <div className='flex gap-3'>
            <img width={40} src={assets.facebook_icon} alt="Facebook" />
            <img width={40} src={assets.twitter_icon} alt="Twitter" />
            <img width={40} src={assets.google_plus_icon} alt="Google Plus" />
        </div>

    </div>
  )
}

export default Footer;
