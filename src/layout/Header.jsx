const Header = () => {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          React Movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              className='grey-text text-lighten-4 right'
              href='https://github.com/EvgeniiKolesnikov/react-movies'
              target='_blank'
              rel='noopener noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
