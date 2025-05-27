const rootImg = {
    imageurl: "/download.jpg"
}
const footerContents = [
    {label: "Terms", href: "#" },
    {label: "Privacy", href: "#"},
    {label: "Security", href: "#"},
    {label: "Policy", href: "#"},
    {label: "contact", href: "Notice"}
]
 
const Footer = () => {
  return (
    <div className='flex items-center justify-between p-5 bg-blue-950 shadow-inner w-full z-50 fixed bottom-0 '>
     <div className='flex items-center gap-3'>   
        <img
            src={rootImg.imageurl}
            alt="Help hub logo"
            className='rounded-full h-10 w-10'
        />
            <p className='text-white'> © Help hub Inc. 2025</p>
     </div>        
      <ul className='flex gap-4 ml-4'>
        {footerContents.map((item, index) => (
          <li key={index} className='list-none'>
            <a
              
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:underline'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
