window.myApp = {};

document.addEventListener('init', function(event) {
  var page = event.target;
  var myNavigator = document.querySelector('#myNavigator');
  console.log("page.id:", page.id);
  //loginPage logic
  if (page.id == 'loginPage') {
    document.querySelector('#login').onclick = function () {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      if (username === 'j' && password === 'j') {
        var userId = 1;
        myApp.user.setUser(userId);
        myNavigator.pushPage("goods_search_page.html");
      }
      else {
        ons.notification.alert('Incorrect username or password.');
      }
    };
  }

  //Search Page logic
  if (page.id == 'goodsSearchPage') {
    page.querySelector('[component="button/menu"]').onclick = function() {
      document.querySelector('#mySplitter').left.toggle();
    };
  }

  //Menu Page logic
  if (page.id == 'menuPage') {
    page.querySelector('#logOut').onclick = function() {
      myApp.user.clearUser();
      myNavigator.resetToPage('login_page.html');
    };
  }
}, false);
