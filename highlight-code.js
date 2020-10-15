document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre.demo-code code').forEach((block) => {
      hljs.highlightBlock(block);
    });
});