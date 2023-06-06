$(document).ready(function() {
  // Array of file names
  var files = [
    'project1.html',
    'project2.html',
    'project3.html',
    'project4.html',
    'project5.html',
    'project6.html',
    'project7.html',
    'project8.html',
    'project9.html',
    'project10.html'
  ];

  // Function to load HTML file
  function loadFile(file) {
    $.ajax({
      url: file,
      dataType: 'html',
      success: function(data) {
        $('#' + file.split('.')[0]).html(data);
      }
    });
  }

  // Load each HTML file
  for (var i = 0; i < files.length; i++) {
    loadFile(files[i]);
  }
});
