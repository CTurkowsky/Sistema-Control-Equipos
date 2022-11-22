import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Control Equipos Informaticos</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Categoria
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/categoria' className='dropdown-item'>
                    Categoria
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listcategoria' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Equipo Informatico
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/' className='dropdown-item'>
                    Registro
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/list' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Marca
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/marca' className='dropdown-item'>
                    Registro
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listmarca' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Prestamo
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/prestamo' className='dropdown-item'>
                    Registro
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/equipoprestamo' className='dropdown-item'>
                    Detalle Prestamo
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listprestamo' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listequipoprestamo' className='dropdown-item'>
                    List Detalle
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Incidencia
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/incidencia' className='dropdown-item'>
                    Incidencia
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listincidencia' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Docente
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <RouterLink to='/docente' className='dropdown-item'>
                    Docente
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to='/listdocente' className='dropdown-item'>
                    List
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
