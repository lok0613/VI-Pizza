angular.module('starter.services', [])

.factory('Pizza', function() {
  var pizzas = [{
    id: 0,
    name: '超級至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/04.png'
  }, {
    id: 1,
    name: '烤雞至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/19.png'
  }, {
    id: 2,
    name: '素食至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/26.png'
  }, {
    id: 3,
    name: '超級至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/04.png'
  }, {
    id: 4,
    name: '烤雞至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/19.png'
  }, {
    id: 5,
    name: '素食至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/26.png'
  }, {
    id: 6,
    name: '超級至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/04.png'
  }, {
    id: 7,
    name: '烤雞至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/19.png'
  }, {
    id: 8,
    name: '素食至尊 (香濃茄醬)',
    image: 'http://order2.pizzahut.com.hk/menu/v000001/hk/tc/images/26.png'
  }];

  return {
    all: function () {
      return pizzas;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
