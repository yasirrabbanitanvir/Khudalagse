document.addEventListener('DOMContentLoaded', function () {
  var mainTextElement = document.getElementById('mainText');
  var changeContentLink = document.getElementById('changeContent');

  changeContentLink.addEventListener('click', function () {
      mainTextElement.textContent = 'New content added dynamically!';
      mainTextElement.style.backgroundColor = '#ffeecc';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var loadingContainer = document.getElementById('loadingContainer');
  var mainContent = document.getElementById('mainContent');

  setTimeout(function () {
      loadingContainer.style.display = 'none';
      mainContent.style.display = 'block';
  }, 2000);
});