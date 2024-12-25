function Navbar() {
  return (
    <div>
      <div className=  ' justify-center flex' >
        <nav className=' rounded-full shadow px-8 py-2 bg-white '>
          <ul className='flex font-semibold text-base space-x-2   sm:text-lg sm:space-x-6  '>
            <li className='hover:text-gray-300 transition-colors'>Home</li>
            <li className='hover:text-gray-300 transition-colors'>About</li>
            <li className='hover:text-gray-300 transition-colors'>Projects</li>
            <li className='hover:text-gray-300 transition-colors'>Contacts</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;