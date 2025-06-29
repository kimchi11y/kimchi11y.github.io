 function NavTabs(props) {
    return (
      <div>
        <a href="#" className="text-gray-700 transition delay-50 duration-200 ease-in-out hover:bg-green-200 rounded-xl hover:scale-120 px-4 py-2">
          {props.name}
        </a>
      </div>
    )
  }
 
 function Navbar() {

  
    return (
      <>
      <div className="flex justify-center bg-gray-100 p-2 shadow-md">
      <NavTabs name="Home" />
      <NavTabs name="About" />
      <NavTabs name="Contact" />
      </div>
      </>
    );
}

export default Navbar; 

