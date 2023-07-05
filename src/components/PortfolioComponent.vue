<template>
    <div class="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div class="project-list">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <img :src="require(`@/assets/${project.image}`)" alt="Project Image" class="project-image">
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="fa-brands fa-github fa-beat fa-xl" style="color: #000000;"></a>
          </div>
        </div>
      </div>
      <div class="skill-list" >
        <div class="skill-card">

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortfolioComponent',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'ReadVice',
            description: 'The project recognizes the immense value of book recommendations, as they allow readers to connect with others and share in their experiences.',
            image: 'project1.png',
            githubLink: 'https://github.com/DYagmur/ReadVice',
          },
          {
            id: 2,
            title: 'Portfolio',
            description: ' This portfolio showcases my projects, skills, and experience in the field of web development.',
            image: 'project2.jpg',
            githubLink: 'https://github.com/your-username/project2',
        },
        {
            id: 3,
            title: 'Dish Dig',
            description: 'Recipe Finder with Vue.js',
            image: 'project3.png',
            githubLink:  'https://github.com/your-username/project3',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .portfolio {
    margin-top: 60px;
  }
  
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .project-card {
    width: 300px;
    margin-bottom: 20px;
    background-color: rgba(245, 245, 245, 0.);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .project-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .project-details {
    margin-top: 10px;
  }
  
  .project-details h3 {
    font-size: 28px;
    margin-bottom: 5px;
  }
  
  .project-details p {
    color: #3f3e3e;
  }
  
  .project-details a {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .project-card {
      width: 100%;
    }
    h2 {

        padding-bottom: 30px;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .project-card {
      width: calc(50% - 20px);
      border: 1px solid red;
      margin-left:220px;
    }
    
    h2 {
        
        padding-bottom: 30px;
    }
  }
  
  @media (min-width: 1025px) {
    .project-card {
      width: calc(33.33% - 20px);
    }
  }
  </style>
  