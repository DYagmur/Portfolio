<template>
        <input type="checkbox" id="toggle">
    
        <nav>
            <a class="navbar-brand" href="#">
                Duygu Efe
            </a>
    
            <label class="navbar-toggler" for="toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </label>
    
            <ul class="nav-list">
                <li class="nav-item">
                   <!--  <router-link class="nav-link" to="/">Home</router-link> -->
                    <a href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/">About</router-link>
                </li>
                <li class="nav-item">
<!--                     <router-link class="nav-link" to="/">Portfolio</router-link>
 -->                    <a href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Contact</router-link>
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
    color: #ffffff;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: .5px;
}

nav .nav-list {
    display: flex;
}

nav .nav-list .nav-item {
    cursor: pointer;
    height: 100%;
    padding: 0 30px;
    transition: .4s;
    color:whitesmoke;
}

nav .nav-list .nav-item:hover {
    background: #b69955;
}

nav .nav-list .nav-link {
    color: #f1f1f1;
    font-size: 18px;
    font-weight: 500;
}

nav .nav-list a {
    color:whitesmoke;
}

@media (max-width: 935px) {
    
    nav {
        padding: 0 2rem;
    }

    nav .nav-list .nav-item {
        padding: 0 20px;
    }
    nav .nav-list a {
        color:whitesmoke;
    }
}

@media (max-width: 675px) {
    
    .profile-picture {
        border: 1px solid red ;
        margin-top: 200px;
        
    }
    
    nav .nav-list {
        display: grid;
        position: absolute;
        background: rgba(64, 64, 64, 0.8);
        width: 100%;
        top: 75px;
        left: 0;
        transform: translateY(-100%);
        z-index: -1;
        transition: .6s;
    }
    
    nav .nav-list .nav-item {
        padding-left: 35px;
    }
    
    nav .navbar-toggler {
        display: grid !important;
    }
    
    nav .nav-list a {
        color:whitesmoke;
    }
    
}

nav .navbar-toggler {
    display: none;
    height: min-content;
    margin: 18px -10px 0 0;
    cursor: pointer;
}

nav .navbar-toggler .bar {
    width: 40px;
    height: 5px;
    margin-bottom: 10px;
    background: #ffffff;
    border-radius: 10%;
    transition: .4s;
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
</style>