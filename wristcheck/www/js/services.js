angular.module('starter.services', [])
.factory('Feeds', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var feeds = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 5,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'
  }, {
    id: 6,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 7,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 8,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }];
  return {
    all: function() {
      return feeds;
    }
}
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 5,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'
  }, {
    id: 6,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  },{
    id: 7,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'http://g04.s.alicdn.com/kf/HT1N3efFAVjXXagOFbXI/206067248/HT1N3efFAVjXXagOFbXI.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 8,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'http://www.details.com/images/ultimate-guides/watches/whats-on-your-wrist-watch-hub-400.jpg',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

  }, {
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    profile_image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p80x80/10620534_10152257094941646_8670151155614653129_n.jpg?oh=801a15a42bdf934c8b00124745397226&oe=56066B31&__gda__=1446148660_c4407e70f506c9dbf90a5d38e8202636'

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
