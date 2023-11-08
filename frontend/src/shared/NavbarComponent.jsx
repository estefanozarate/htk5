import {Link} from "react-router-dom";
const NavbarComponent = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item">
                                <Link to='/persons' className="nav-link">Persons</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/person-group' className="nav-link">Person Group</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/groups' className="nav-link">Groups</Link>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
     
        </>
    );
}
 
export default NavbarComponent;