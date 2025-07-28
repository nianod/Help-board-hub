import { Link } from 'react-router-dom'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaTiktok, FaSnapchat, FaLinkedin } from 'react-icons/fa'

const rootImg = {
    imageurl: "/download.jpg"
}
const footerContents = [
    {label: "Terms", href: "/404"},
    {label: "Privacy", href: "/404"},
    {label: "Security", href: "/404"},
    {label: "Policy", href: "/404"},
    {label: "contact", href: "/404"}
]

const icons = [
  {icon : <FaWhatsapp />, href:"#"},
  {icon : <FaFacebook />, href:"#"},
  {icon : <FaInstagram />, href:"#"},
  {icon : <FaSnapchat />, href:"#"},
  {icon : <FaTwitter />, href:"#"},
  {icon : <FaTiktok />, href:"#"},
  {icon : <FaLinkedin />, href:""}
]
 
const Footer = () => {
  return (
    <div className='flex items-center justify-between p-5 bg-blue-950 shadow-inner w-full z-50 fixed bottom-0 '>
    < div >
       <div className='flex items-center gap-3'>   
          <img
              src={rootImg.imageurl}
              alt="Help hub logo"
              className='rounded-full h-10 w-10'
          />
              <p className='text-white'> © Help hub Inc. 2025</p>
       </div>        
       <div>
        all rights reserved
       </div>
        <ul className='flex gap-4 ml-4'>
          {footerContents.map((item, index) => (
            <li key={index} className='list-none'>
              <Link
                to={item.href}
                className='text-white hover:underline'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
        <div>
          <p>Follow us on:</p>
          {icons.map((item, index) => (
            <p key={index}>
              {item.icon}
            </p>
          ))}
        </div>      
    </div>
    
  )
}

export default Footer;
