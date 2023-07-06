<template>
    <input type="checkbox" id="toggle">
  
    <nav>
      <a class="navbar-brand" href="#home">Duygu Efe</a>
  
      <label class="navbar-toggler" for="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>
  
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a href="#about">About</a>
        </li>
        <li class="nav-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
    height: 75px;
    line-height: 75px;
    background: transparent;
  }
  
  nav .navbar-brand {
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }
  
  nav .nav-list {
    display: flex;
  }
  
  nav .nav-list .nav-item {
    cursor: pointer;
    height: 100%;
    padding: 0 20px;
    transition: 0.4s;
    color: #333;
  }
  
  nav .nav-list .nav-item:hover {
    background: #f2f2f2;
  }
  
  nav .nav-list a {
    color: #333;
    font-size: 16px;
  }
  
  nav .navbar-toggler {
    display: none;
    height: min-content;
    margin: 18px -10px 0 0;
    cursor: pointer;
  }
  
  nav .navbar-toggler .bar {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    background: #333;
    border-radius: 4px;
    transition: 0.4s;
  }
  
  input {
    display: none;
  }
  
  input:checked ~ nav .nav-list {
    transform: translateY(0);
  }
  
  input:checked ~ nav .navbar-toggler {
    margin-top: 35px;
  }
  
  input:checked ~ nav .navbar-toggler .bar:nth-child(1) {
    position: absolute;
    transform: rotate(45deg);
  }
  
  input:checked ~ nav .navbar-toggler .bar:nth-child(2) {
    display: none;
  }
  
  input:checked ~ nav .navbar-toggler .bar:nth-child(3) {
    transform: rotate(-45deg);
  }
  
  @media (max-width: 768px) {
    nav {
      padding: 0 2rem;
    }
  
    nav .nav-list .nav-item {
      padding: 0 15px;
    }
  
    nav .navbar-toggler {
      display: block;
    }
  
    nav .nav-list {
      display: none;
      position: absolute;
      background: #f7f7f7;
      width: 100%;
      top: 75px;
      left: 0;
      transform: translateY(-100%);
      transition: 0.6s;
      z-index: 1;
    }
  
    nav .nav-list .nav-item {
      padding: 15px;
      color: #333;
      text-align: center;
    }
  
    nav .nav-list a {
      color: #333;
      font-size: 18px;
    }
  
    nav .navbar-toggler {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  
    nav .navbar-toggler .bar {
      width: 30px;
      height: 4px;
      margin-bottom: 6px;
      background: #333;
      border-radius: 4px;
      transition: 0.4s;
    }
  
    input:checked ~ nav .nav-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateY(0);
    }
  
    input:checked ~ nav .navbar-toggler .bar:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }
  
    input:checked ~ nav .navbar-toggler .bar:nth-child(2) {
      display: none;
    }
  
    input:checked ~ nav .navbar-toggler .bar:nth-child(3) {
      transform: rotate(-45deg) translate(3px, -3px);
    }
  }  
  </style>
  