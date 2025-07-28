import { Link } from 'react-router-dom'
import {
  FaFacebook, FaWhatsapp, FaInstagram,
  FaTwitter, FaTiktok, FaSnapchat, FaLinkedin
} from 'react-icons/fa'

const rootImg = {
  imageurl: "/download.jpg"
}

const footerContents = [
  { label: "Terms", href: "/404" },
  { label: "Privacy", href: "/404" },
  { label: "Security", href: "/404" },
  { label: "Policy", href: "/404" },
  { label: "Contact", href: "/404" }
]

const icons = [
  { icon: <FaWhatsapp />, href: "#" },
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaSnapchat />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaTiktok />, href: "#" },
  { icon: <FaLinkedin />, href: "#" }
]

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white w-full shadow-inner fixed bottom-0 z-50'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4'>
        <div className='flex items-center gap-3'>
          <img src={rootImg.imageurl} alt="Help hub logo" className='rounded-full h-10 w-10' />
          <div>
            <p className='font-semibold'>© Help Hub Inc. 2025</p>
            <p className='text-sm'>All rights reserved</p>
          </div>
        </div>
        <ul className='flex flex-wrap gap-4 text-sm'>
          {footerContents.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className='hover:underline hover:text-blue-400 transition duration-200'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <span className='text-sm'>Follow us:</span>
          {icons.map((item, index) => (
            <a key={index} href={item.href} className='text-lg hover:text-blue-400 transition duration-200'>
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer
