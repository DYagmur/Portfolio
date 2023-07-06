<template>
    <div class="about-me">
      <div class="section">
        <h2>About Me</h2>
        <p>
          Hello! My name is Duygu Efe, and I'm a passionate web developer with a strong background in front-end development. I specialize in creating modern, user-friendly websites using the latest web technologies.
        </p>
        <p>
          I have extensive experience in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies and frameworks. I enjoy working on challenging projects and turning ideas into reality.
        </p>
        <p>
          Aside from coding, I also have a keen eye for design and enjoy creating visually appealing and intuitive user interfaces. I believe that a great user experience is just as important as clean and efficient code.
        </p>
        <p>
          If you're looking for a dedicated and skilled web developer to bring your ideas to life, please feel free to get in touch. I'm excited to work on new projects and help businesses succeed in the digital world.
        </p>
      </div>
  
      <div class="section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Associate Degree in Computer Programming</h3>
            <p>Celal Bayar University, Izmir, Turkey (2017 - 2019)</p>
          </li>
          <li>
            <h3>Bachelor's Degree in Economics</h3>
            <p>Celal Bayar University, Izmir, Turkey (2010 - 2016)</p>
          </li>
          <li>
            <h3>Master's Degree in Computer Science and Statistics</h3>
            <p>9 Eylul University, Izmir, Turkey (2017)</p>
          </li>
          <li>
            <h3>Web Development</h3>
            <p>Tamwood Career College, BC, Canada (2023- Present)</p>
          </li>
        </ul>
      </div>
  
      <div class="section">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Devop-Automation Engineer</h3>
            <p>Ericsson, Izmir, Turkey (2020 - Present)</p>
            <ul>
              <li>Design, develop, and maintain automated workflows and pipelines for software development, testing, and deployment.</li>
              <li>Implement and configure DevOps tools and frameworks to support continuous integration, continuous delivery, and infrastructure management.</li>
              <li>Collaborate with software development and operations teams to streamline processes and ensure seamless integration between development and production environments.</li>
            </ul>
          </li>
          <li>
            <h3>Automation Engineer</h3>
            <p>Turk Telecom, Izmir, Turkey (2020 - 2021)</p>
            <ul>
              <li>Continuously evaluate and implement new technologies, tools, and methodologies to enhance the DevOps practices and improve productivity.</li>
              <li>Document processes, procedures, and configurations to ensure proper knowledge transfer and maintain system documentation.</li>
              <li>Troubleshoot and resolve issues related to build and deployment processes, infrastructure, and application performance.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style>
  .about-me {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid #eaeaea;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333;
  }
  
  .about-me .section {
    margin-bottom: 40px;
  }
  
  .about-me h2 {
    font-size: 29px;
    margin-bottom: 20px;
  }
  
  .about-me h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .about-me p {
    margin-bottom: 20px;
    line-height: 1.5;
    color: #666;
  }
  
  .about-me ul {
    margin-top: 20px;
    padding-left: 20px;
  }
  
  .about-me ul ul {
    margin-top: 10px;
    padding-left: 15px;
  }
  
  .about-me li {
    margin-bottom: 10px;
  }

  .section {
    background-color: rgba(185, 185, 185, 0.1);
    border-radius: 10px;
  }
  
  /* Responsive Styles */
  @media (max-width: 767px) {
    .about-me {
      padding: 20px;
    }
  
    .about-me h2 {
      font-size: 27px;
      margin-bottom: 15px;
    }
  
    .about-me h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    .about-me p {
      font-size: 14px;
      margin-bottom: 15px;
    }
  
    .about-me ul {
      margin-top: 15px;
      padding-left: 15px;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    .about-me {
      padding: 30px;
    }
  
    .about-me h2 {
      font-size: 22px;
      margin-bottom: 18px;
    }
  
    .about-me h3 {
      font-size: 18px;
      margin-bottom: 12px;
    }
  
    .about-me p {
      font-size: 16px;
      margin-bottom: 12px;
    }
  
    .about-me ul {
      margin-top: 18px;
      padding-left: 18px;
    }
  }
  
  @media (min-width: 1024px) {
    .about-me {
      padding: 40px;
    }
  
    .about-me h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }
  
    .about-me h3 {
      font-size: 24px;
      margin-bottom: 15px;
    }
  
    .about-me p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  
    .about-me ul {
      margin-top: 20px;
      padding-left: 20px;
    }
  }
  </style>
  