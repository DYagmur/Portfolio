<template>
    <div class="skills">
      <h2>Web Development Skills</h2>
      <div class="skill-list">
        <div class="skill-card" v-for="skill in skills" :key="skill.id">
          <div class="skill-details">
            <h3>{{ skill.name }}</h3>
            <div class="skill-progress">
              <div class="progress-bar" :style="{ width: skill.percentage + '%' }"></div>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillComponent',
    data() {
      return {
        skills: [
          {
            id: 1,
            name: 'HTML5',
            description: 'Semantic markup language for web pages.',
            percentage: 95,
          },
          {
            id: 2,
            name: 'CSS3',
            description: 'Styling language to make web pages visually appealing.',
            percentage: 85,
          },
          {
            id: 4,
            name: 'Vue.js',
            description: 'Progressive JavaScript framework for building user interfaces.',
            percentage: 75,
          },
          {
            id: 5,
            name: 'PHP',
            description: 'Server-side scripting language for web development.',
            percentage: 85,
          },
          // Add more skills as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills {
    margin-top: 60px;
    border: 1px solid #ccc;
    padding: 40px;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  .skills h2 {
    padding-bottom: 20px;
    font-size: 40px;
  }
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .skill-card {
    width: 300px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .skill-details {
    margin-top: 10px;
  }
  
  .skill-details h3 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }
  
  .skill-progress {
    height: 10px;
    background-color: #eaeaea;
    border-radius: 5px;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #75777a;
    border-radius: 5px;
  }
  
  .skill-details p {
    color: #888;
  }
  
  @media (max-width: 768px) {
    .skill-card {
      width: 100%;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .skill-card {
      width: calc(50% - 20px);
      margin-left: 180px;
    }
  }
  
  @media (min-width: 1025px) {
    .skill-card {
      width: calc(33.33% - 20px);
      margin-left:110px;
      margin-right:90px;
    }
  }
  </style>
  