import './Header.css';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">
          <a href="#hero">Joel MacDonald</a>
        </h1>
        <ul className="nav-list">
          <li>
            <a
              href="#hero"
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${
                activeSection === 'about' ? 'active' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === 'projects' ? 'active' : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
