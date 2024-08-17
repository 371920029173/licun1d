let fileData = {};
 
function saveFiles() {
  const input = document.getElementById('fileInput');
  const files = input.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (e) => {
      fileData[file.name] = e.target.result;
      localStorage.setItem('offlineFiles', JSON.stringify(fileData));
    };
    reader.readAsDataURL(file);
  }
}
 
function searchFiles() {
  const searchTerm = document.getElementById('searchInput').value;
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';
  const storedData = JSON.parse(localStorage.getItem('offlineFiles') || '{}');
  Object.keys(storedData).forEach(fileName => {
    if (fileName.includes(searchTerm)) {
      const img = document.createElement('img');
      img.src = storedData[fileName];
      resultsDiv.appendChild(img);
    }
  });
}