import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Homepage = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Josh Thomas</h1>
          <p>Software Engineer & Musician</p>
        </div>
      </section>
      {/* End Hero */}

      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                Hello, I'm Josh Thomas, a 25-year-old junior software engineer
                and web developer based in Caerphilly. Passionate about crafting
                digital experiences, I specialise in full-stack development
                using technologies like HTML, CSS, JavaScript, React, NodeJs,
                and Django. Beyond coding, my interests extend to bodybuilding,
                boxing and exploring local history. Welcome to my portfolio,
                where I blend creativity and technology to bring ideas to life.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="../../images/single-pic-of-me.JPEG"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Junior Software Engineer / Web Developer</h3>
                <p className="fst-italic">A few personal details...</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>24 June 1998</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong>{" "}
                        <span>www.codingandmusicwithjosh.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+44 7902 598774</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Town:</strong> <span>Caerphilly, UK</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong> <span>25</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong>{" "}
                        <span>joshua.thomas98@hotmail.co.uk</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Alma mater:</strong>{" "}
                        <span>University of South Wales</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h5>
                  <strong>Curious to Know More?</strong>
                </h5>
                <p>
                  If you're intrigued and eager to learn more about the person
                  behind the code, don't hesitate to reach out. I'm always open
                  to connecting, sharing experiences, and exploring potential
                  collaborations. Let's connect and delve deeper into the world
                  of technology, creativity, and everything in between. Looking
                  forward to the opportunity to connect with you!
                </p>

                <div className="pt-3">
                  <SocialMediaIcons size={48} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Aspiring junior software engineer and web developer, I bring a
                dynamic skill set encompassing a range of modern web development
                technologies. Eager to contribute and learn in a collaborative
                and growth-focused environment.
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-12" data-aos="fade-up">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Examples of Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fab fa-html5"></i> HTML
                      </td>
                      <td>
                        Developed the structure and layout of multiple web pages
                        using HTML. Ensured proper use of semantic tags for
                        better accessibility and SEO.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-css3"></i> CSS/Bootstrap/Chakra UI
                      </td>
                      <td>
                        Styled and designed responsive user interfaces using
                        CSS, Bootstrap, and Chakra UI. Implemented custom styles
                        to enhance the visual appeal and user experience.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-js"></i> JavaScript
                      </td>
                      <td>
                        Built interactive features and functionality on websites
                        using JavaScript while utilising modern JavaScript
                        features for efficient development. Managed project
                        dependencies and scripts using npm for streamlined
                        package management.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-react"></i> React/JSX/Vite
                      </td>
                      <td>
                        Developed dynamic and reusable components using React.
                        Utilised JSX syntax and optimised performance with both
                        Create React App and Vite for faster development builds.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-react"></i> React Native/Expo
                      </td>
                      <td>
                        Built several basic cross-platform mobile applications
                        using React Native and Expo, demonstrating hands-on
                        experience and proficiency in mobile app development
                        with these technologies.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-python"></i> Python/Django
                      </td>
                      <td>
                        Built web applications using the Django framework with
                        Python. Implemented backend logic, database models, and
                        RESTful APIs.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-node"></i> Node.js/Express
                      </td>
                      <td>
                        Built server-side applications using Node.js with the
                        Express framework. Implemented RESTful APIs and handled
                        asynchronous operations.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-aws"></i> AWS - Elastic
                        Beanstalk/S3/EC2
                      </td>
                      <td>
                        Deployed applications on AWS using Elastic Beanstalk,
                        stored files in S3, and managed virtual servers on EC2.
                        Ensured scalability, reliability, and security in the
                        cloud environment.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-react"></i> React Context API/React
                        Redux/Redux Toolkit
                      </td>
                      <td>
                        Managed application state efficiently using React
                        Context API and React Redux with Redux Toolkit.
                        Implemented actions, reducers, and middleware for a
                        scalable state management solution.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-wordpress"></i> WordPress
                      </td>
                      <td>
                        Customised and developed WordPress themes to create
                        unique and user-friendly websites. Implemented plugins
                        and optimised performance for a seamless experience.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-mobile-alt"></i> Responsive Web
                        Design
                      </td>
                      <td>
                        Designed and developed websites with a focus on
                        responsive web design. Ensured optimal user experience
                        across various devices and screen sizes.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-git"></i> Git
                      </td>
                      <td>
                        Utilised Git for version control across a multitude of
                        projects. Managed branches, resolved conflicts, and
                        ensured a smooth development workflow.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-laptop-code"></i> Problem-solving
                        and debugging
                      </td>
                      <td>
                        Demonstrated strong problem-solving skills and effective
                        debugging techniques. Resolved complex issues and
                        optimised code for better performance.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-canva"></i> Basic graphic design
                        using PlaceIt, Canva, and Adobe Photoshop
                      </td>
                      <td>
                        Created visuals, images, and graphics using PlaceIt,
                        Canva, and Adobe Photoshop for web projects. Enhanced
                        overall aesthetics and user experience through basic
                        graphic design.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}

        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                During my studies, I gained hands-on experience in music
                production, sound engineering, and songwriting. I collaborated
                with a diverse range of musicians and artists, honing my skills
                in teamwork, communication, and creative problem-solving. In
                addition to my academic achievements, I was actively involved in
                extracurricular activities, including organising and performing
                in various music events.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Josh Thomas</h4>
                  <p>
                    <em>
                      Motivated and enthusiastic Junior Web Developer with
                      hands-on experience in HTML, CSS, Bootstrap, JavaScript
                      (including npm), React, JSX, Vite, Python, Django, Node.js
                      (Express), AWS (Elastic Beanstalk/S3/EC2), React Context
                      API, React Redux/Redux Toolkit, Wordpress, and Git.
                      Proficient in creating dynamic, responsive, and visually
                      appealing websites. Skilled in problem-solving and
                      effective communication. Seeking a challenging role to
                      further enhance my technical and professional skills.
                    </em>
                  </p>
                  <ul>
                    <li>Caerphilly, South Wales, UK</li>
                    <li>+44 7902 598774</li>
                    <li>joshua.thomas98@hotmail.co.uk</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>
                    Bachelor of Science &amp; Creative Industries Popular Music
                    Technology
                  </h4>
                  <h5>2018 - 2019</h5>
                  <p>
                    <em>University of South Wales (Atrium), Cardiff</em>
                  </p>
                  <p>
                    My BSc in Popular Music Technology at the University of
                    South Wales immersed me in the dynamic world of music
                    production. From sound engineering intricacies to mastering
                    cutting-edge tools such as Logic Pro X and the industry
                    standard Pro Tools, this programme equipped me with
                    essential skills for the evolving landscape of creative
                    industries.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Master of Arts &amp; Songwriting</h4>
                  <h5>2019 - 2020</h5>
                  <p>
                    <em>University of South Wales (Atrium), Cardiff</em>
                  </p>
                  <p>
                    In my MA in Songwriting at the University of South Wales, I
                    delved into the artistry of crafting lyrics and melodies.
                    This transformative programme honed my creative skills,
                    exploring the intricate balance between emotion and musical
                    expression.
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Acorn Digital (Part-time)</h4>
                  <h5>September 2020 - April 2022</h5>
                  <p>
                    <em>
                      Acorn Digital Ltd, (Part-time role after university and
                      alongside playing in a band)
                    </em>
                  </p>
                  <ul>
                    <li>
                      Played a key role in maintaining CMS based portals hosted
                      on behalf of clients, primarily using WordPress and
                      custom-built solutions.
                    </li>
                    <li>
                      Designed logos and graphics for clients, ensuring a
                      visually appealing representation of their brand.
                    </li>
                    <li>
                      Implemented small development changes to existing products
                      built by Acorn Digital using Python and Django.
                    </li>
                    <li>
                      Contributed to the design of basic content pages on
                      web-based platforms for small companies.
                    </li>
                    <li>
                      Executed basic administrative duties including generating
                      invoices, chasing payments, and handling client inquiries.
                    </li>
                  </ul>
                  <p>
                    Developed a keen interest in coding during this period,
                    dedicating significant time to online training courses on
                    platforms like Udemy and YouTube. Focused primarily on
                    web-based applications using React JS, Python, and the
                    Django framework.
                  </p>
                </div>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Freelance Web Developer</h4>
                  <h5>October 2022 - Present</h5>
                  <p>
                    <em>Self-Employed</em>
                  </p>
                  <ul>
                    <li>
                      Successfully collaborated with local businesses, including
                      Pacific Supergym, Treforest Service Centre, and Tech Minds
                      Consulting, to develop and deploy fully functional and
                      visually appealing websites.
                    </li>
                    <li>
                      Leveraged coding skills in ReactJS, NodeJS, and
                      Python/Django to meet clients' specific requirements,
                      ensuring optimal performance and user experience.
                    </li>
                    <li>
                      Effectively utilised state management tools such as React
                      Context API and Redux Toolkit to enhance the functionality
                      and responsiveness of websites.
                    </li>
                    <li>
                      Monetised coding knowledge by delivering quality web
                      solutions for local businesses, contributing to their
                      online presence and overall success.
                    </li>
                  </ul>
                  <p>
                    Continuously honing my skills and staying abreast of the
                    latest advancements in web development to provide
                    cutting-edge solutions for clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-briefcase" />
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href="">Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon">
                  <i className="bi bi-bar-chart" />
                </div>
                <h4 className="title">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon">
                  <i className="bi bi-binoculars" />
                </div>
                <h4 className="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <i className="bi bi-brightness-high" />
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="icon">
                  <i className="bi bi-calendar4-week" />
                </div>
                <h4 className="title">
                  <a href="">Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}

        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="fade-up">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>Bedwas, Caerphilly</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>joshua.thomas98@hotmail.co.uk</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+44 7902 598774</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.745119373168!2d-3.1998!3d51.5928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e7f5b84e2cddf%3A0x14dcca94b02000c1!2sYour%20Location!5e0!3m2!1sen!2sus!4v1643012345678"
                    frameborder="0"
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowfullscreen=""
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
};

export default Homepage;

// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import RecentWorkCarousel from "../components/RecentWorkCarousel";

// const Homepage = () => {
//   const navigate = useNavigate();

//   const navigateToCodingPortfolio = () => {
//     navigate("/codingportfolio");
//   };

//   const navigateToMyMusic = () => {
//     navigate("/mymusic");
//   };

//   return (
//     <div>
//       <section className="bg-lighter-grey pb-5">
//         <Container>
//           <Row xs={1} md={2}>
//             <Col>
//               <h1 className="pt-5">A bit about me...</h1>

//               <p>
//                 Hello there! I'm Josh Thomas, a 25-year-old junior software
//                 engineer based in Caerphilly. By day, I'm immersed in the world
//                 of coding, building digital solutions and embracing the
//                 challenges that come with it.
//               </p>

//               <p>
//                 But beyond the screen, I'm a guitarist, finding joy in weaving
//                 melodies and stories through the strings. Music is my way of
//                 expressing what words can't capture.
//               </p>

//               <p>
//                 Weight training is another passion of mine, a grounding practice
//                 that teaches me discipline and resilience. And when I'm not in
//                 front of a computer or with a guitar in hand, you'll likely find
//                 me exploring the wonders of aviation.
//               </p>

//               <p>
//                 This website is my virtual space—a hub where potential employers
//                 can dive into my coding portfolio, and where I can share my
//                 musical projects. It's a reflection of the dual worlds I
//                 inhabit, showcasing my technical skills alongside my love for
//                 music. Thanks for stopping by!
//               </p>

//               <div className="text-center">
//                 <Button onClick={navigateToCodingPortfolio}>
//                   My Coding Portfolio
//                 </Button>
//                 <Button className="mx-3" onClick={navigateToMyMusic}>
//                   My Music
//                 </Button>
//               </div>
//             </Col>

//             <Col align="center">
//               <img
//                 className="img-fluid pt-5"
//                 src="../../images/grad-pic.jpeg"
//                 alt="Grad pic"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <Container>
//         <section className="py-5">
//           <RecentWorkCarousel />
//         </section>
//       </Container>
//     </div>
//   );
// };

// export default Homepage;
