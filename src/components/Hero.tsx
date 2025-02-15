import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-content">
        <h4 className="small-heading">Hi, my name is</h4>
        <h1 className="big-heading">Joel MacDonald.</h1>
        <h2 className="sub-heading">I build things for the web.</h2>
        <p className="hero-description">
          I'm a software developer specializing in building exceptional digital
          experiences. Currently focused on creating incredible UI/UX with clean
          modern looks.
        </p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="hero-visual"
        >
          <path
            fill='url("#SvgjsLinearGradient1076")'
            d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient1076"
            >
              <stop
                stopOpacity=" 1"
                stopColor="rgba(105, 234, 203)"
                offset="0"
              ></stop>
              <stop
                stopOpacity=" 1"
                stopColor="rgba(234, 204, 248)"
                offset="0.48"
              ></stop>
              <stop
                stopOpacity=" 1"
                stopColor="rgba(102, 84, 241)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};
export default Hero;
