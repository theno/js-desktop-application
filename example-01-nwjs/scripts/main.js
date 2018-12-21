'use strict'
const os = require('os');
document.addEventListener('DOMContentLoaded', () => {
  let platform = os.platform();
  document.getElementById('platform').textContent = platform;
});
