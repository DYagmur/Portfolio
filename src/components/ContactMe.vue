<template>
    <div class="contact-me">
      <h2>Contact Me</h2>
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:your-email@example.com">duyguyagmurefe@gmail.com</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <a href="tel:+123456789">+12368778716</a>
        </div>
        <div class="contact-item">
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/duygu-yagmur-efe/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <div class="contact-item">
          <i class="fab fa-github"></i>
          <a href="https://github.com/DYagmur" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
        <div class="resume-download">
          <a href="../../src/resume.pdf" download>
            <i class="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMe',
  };
  </script>
  
  <style scoped>
  .contact-me {
    text-align: center;
    padding: 50px;
    
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(245, 245, 245, 0.9);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .contact-item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  
  .contact-item i {
    margin-right: 10px;
    font-size: 24px;
  }
  
  .contact-item a {
    color: #686a6b;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-item a:hover {
    color: #000000;
  }
  
  .resume-download {
    margin-top: 20px;
    background-color: rgb(105, 105, 105, 0.1);
    padding: 1%;
    border-radius: 10px;
  }
  
  .resume-download a {
    display: flex;
    align-items: center;
    color: #505050;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .resume-download a:hover {
    color: #242525;
  }
  
  .resume-download i {
    margin-right: 10px;
  }
  
  @media (max-width: 767px) {
    /* Styles for mobile devices */
    .contact-me {
      padding: 30px;
    }
  
    h2 {
      font-size: 24px;
    }
  
    .contact-item i {
      font-size: 20px;
    }
  
    .contact-item a {
      font-size: 16px;
    }
  
    .resume-download {
      margin-top: 10px;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    /* Styles for tablets */
    .contact-me {
      padding: 40px;
    }
  
    h2 {
      font-size: 26px;
    }
  }
  
  @media (min-width: 1024px) {
    /* Styles for desktops */
    .contact-me {
      padding: 50px;
    }
  
    h2 {
      font-size: 28px;
    }
  }
  </style>
  