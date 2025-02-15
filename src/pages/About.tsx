import './About.css';
import profilePic from '../assets/me-color.png';

export default function About() {
  return (
    <div className="about-content">
      <h2 className="section-title">
        <span className="accent-text">01.</span> About Me
      </h2>
      <div className="design-line" />
      <div className="about-grid">
        <div className="about-text">
          <p className="about-description">
            Experienced Frontend Developer with years of delivering high
            performance, mobile optimized user interfaces. Proven ability to
            build responsive, single page applications, collaborate with cross
            functional teams, and translate design concepts into interactive
            components. Adept at optimizing UIs for scalability and performance
            as well as integrating frontend with backend APIs for seamless
            functionality.
          </p>
          <ul className="skills-list">
            {[
              { name: 'React', exp: '6 years' },
              { name: 'JavaScript', exp: '6 years' },
              { name: 'TypeScript', exp: '5 years' },
              { name: 'React Native', exp: '1 year' },
              { name: 'HTML', exp: '7 years' },
              { name: 'CSS', exp: '7 years' },
            ].map((skill) => (
              <li key={skill.name} className="skill-item">
                <span className="logo">{skill.name}</span>
                <span className="skill-exp">{skill.exp}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <img
              src={profilePic}
              alt="Developer profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
