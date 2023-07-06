<template>
  <footer class="footer">
    <p>&copy; 2023 Duygu Yagmur EFE</p>
    <ul class="social-links">
      <li>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background: #404040;
  color: #f1f1f1;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.social-links {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.social-links li {
  margin: 0 5px;
}

.social-link {
  color: #f1f1f1;
  font-size: 20px;
}

.social-link:hover {
  color: #535455;
}

.fab {
  transition: color 0.3s ease;
}
</style>
