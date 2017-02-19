myApp.user = {
    setUser: function(userId) {
        Cookies.set('user', userId);
    },

    currentUser: function() {
        return Cookies.get('user');
    },

    clearUser: function() {
        Cookies.remove('user');
    }
};