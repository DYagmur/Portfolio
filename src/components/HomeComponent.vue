<template>
    <div class="profile-picture">
      <img src="../assets/profile-picture.jpg" alt="Profile Picture">
    </div>
    <div class="home-page" id="home">
      <div class="content">
        <div class="text">
          <h1>Hello World!{I'm Duygu}</h1>
          <p>
            Welcome to my web developer portfolio! I am a skilled and passionate web developer with expertise in front-end and back-end development. This portfolio showcases my projects, skills, and experience in the field of web development.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeComponent'
  };
  </script>
  
  <style scoped>

  .profile-picture {

    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid #eaeaea;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333;
    

  }
  .home-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid #eaeaea;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333;
   
    
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .text {
    text-align: center;
    margin-bottom: 20px;
    
    
  }
  
  h1 {
    font-size: 38px;
    margin-bottom:20px;
    
  }
  
  p {
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .profile-picture img {
    width: 200px;
    height: auto;
    border-radius: 50%;
    margin-top: 20px;
  }
  
  @media (min-width: 768px) {
    /* Styles for tablets */
    .home-page {
      max-width: 1024px;
    }
  
    h1 {
      font-size: 36px;
    }
  
    p {
      font-size: 20px;
    }
  }
  
  @media (min-width: 1025px) {
    /* Styles for desktop */
    .home-page {
      max-width: 1280px;
    }
  
    h1 {
      font-size: 48px;
    }
  
    p {
      font-size: 24px;
    }
  }
  </style>
  