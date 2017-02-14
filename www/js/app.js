var navigator = document.querySelector('#myNavigator')
navigator.pushPage("page2.html");

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id == 'page1') {
    ons.notification.alert('Page 1 is initiated.');
    
    var login = function() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      if (username === 'nick' && password === '1234') {
        myNavigator.pushPage("page2.html");
      }
      else {
        ons.notification.alert('Incorrect username or password.');
      }
    };
  }
}, false);
