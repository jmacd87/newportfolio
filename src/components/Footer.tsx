import './Footer.css';

export function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="social-links">
          <a
            key={'github'}
            href="https://github.com/jmacd87"
            target="_blank"
            aria-label={`github profile`}
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            key={'linkedIn'}
            href="https://www.linkedin.com/in/joel-macdonald-9b240165/"
            target="_blank"
            aria-label={`Linked In profile`}
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; Joel MacDonald {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
