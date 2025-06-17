function createNavigation() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">Agentic AI Lab</a>
      </div>
    </nav>
  `;
}

function createFooter() {
  return `
    <footer class="bg-dark text-white text-center py-3">
      <div class="container">
        &copy; 2024 Agentic AI Lab. All rights reserved.
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML('afterbegin', createNavigation());
  
  const scripts = document.querySelectorAll('script');
  const lastScript = scripts[scripts.length - 1];
  lastScript.insertAdjacentHTML('beforebegin', createFooter());
});
