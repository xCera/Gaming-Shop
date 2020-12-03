

const SHOP_DATA = {
    action:{
        id: 1,
        title: 'Action',
        routeName: 'action',
        color: 'pink',
        items: [
          {
            id: 1,
            name: 'Cyberpunk 2077: PC Edition',
            posterUrl: 'https://s1.gaming-cdn.com/images/products/840/271x377/cyberpunk-2077-cover.jpg',
            bgUrl:'https://s1.gaming-cdn.com/images/products/840/screenshot/cyberpunk-2077-wallpaper-5.jpg',
            price: 5503
          }, 
          {
            id: 2,
            name: 'Grand Theft Auto V',
            posterUrl: 'https://s3.gaming-cdn.com/images/products/4211/271x377/grand-theft-auto-v-premium-online-edition-cover.jpg',
            bgUrl:'https://s3.gaming-cdn.com/images/products/4211/screenshot/grand-theft-auto-v-premium-online-edition-wallpaper-2.jpg',
            price: 1077
          }, 
          {
            id: 3,
            name: 'Call Of Duty: Black Ops',
            posterUrl: 'https://s1.gaming-cdn.com/images/products/60/271x377/call-of-duty-black-ops-cover.jpg',
            bgUrl:'https://s1.gaming-cdn.com/images/products/60/screenshot/call-of-duty-black-ops-wallpaper-5.jpg',
            price: 2757
          }, 
          {
            id: 4,
            name: 'Detroit: Become Human',
            posterUrl: 'https://s3.gaming-cdn.com/images/products/7001/271x377/detroit-become-human-cover.jpg',
            bgUrl:'https://s3.gaming-cdn.com/images/products/7001/screenshot/detroit-become-human-wallpaper-4.jpg',
            price: 2157
          }, 
          {
            id: 5,
            name: 'Monster Hunter: World',
            posterUrl: 'https://s2.gaming-cdn.com/images/products/2155/271x377/monster-hunter-world-cover.jpg',
            bgUrl:'https://s2.gaming-cdn.com/images/products/2155/screenshot/monster-hunter-world-wallpaper-1.jpg',
            price: 1820
          }, 
        ]
      },
      adventure:{
        id: 2,
        title: 'Adventure',
        routeName: 'adventure',
        color: 'yellow',
        items: [
          {
              id: 10,
              name: 'Assassin’s Creed Valhalla',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/6147/271x377/assassin%e2%80%99s-creed-valhalla-cover.jpg',
              bgUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F11%2FAssassins-Creed-Valhalla-Wolf-Mount.jpg&f=1&nofb=1',
              price: 6223
            }, 
          {
              id: 11,
              name: 'The Wolf Among Us',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/1407/271x377/the-wolf-among-us-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/1407/screenshot/the-wolf-among-us-wallpaper-3.jpg',
              price: 988
            }, 
          {
              id: 12,
              name: 'Red Dead Redemption 2',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/5679/271x377/red-dead-redemption-2-standard-edition-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/5679/screenshot/red-dead-redemption-2-standard-edition-wallpaper-1.jpg',
              price: 3800
            }, 
          {
              id: 13,
              name: 'Wolfenstein: The New Colossus',
              posterUrl: 'https://s3.gaming-cdn.com/images/products/2135/271x377/wolfenstein-ii-the-new-colossus-cover.jpg',
              bgUrl:'https://s3.gaming-cdn.com/images/products/2135/screenshot/wolfenstein-ii-the-new-colossus-wallpaper-5.jpg',
              price: 1846
            }, 
          {
              id: 14,
              name: 'Shadow of the Tomb Raider',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/2487/271x377/shadow-of-the-tomb-raider-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/2487/screenshot/shadow-of-the-tomb-raider-wallpaper-1.jpg',
              price: 1438
            }, 
        ]
      },
      cooperative:{
        id: 3,
        title: 'CO-OP',
        routeName: 'cooperative',
        color: 'green',
        items: [
          {
              id: 20,
              name: 'Star Wars: Battlefront 2',
              posterUrl: 'https://s3.gaming-cdn.com/images/products/1835/271x377/star-wars-battlefront-2-cover.jpg',
              bgUrl:'https://s3.gaming-cdn.com/images/products/1835/screenshot/star-wars-battlefront-2-wallpaper-2.jpg',
              price: 1556
            }, 
          {
              id: 21,
              name: 'Sea of Thieves (PC / Xbox ONE)',
              posterUrl: 'https://s2.gaming-cdn.com/images/products/967/271x377/sea-of-thieves-pc-xbox-one-cover.jpg',
              bgUrl:'https://s2.gaming-cdn.com/images/products/967/screenshot/sea-of-thieves-pc-xbox-one-wallpaper-2.jpg',
              price: 3356
            }, 
            {
                id: 22,
                name: 'Don’t Starve Together',
                posterUrl: 'https://s1.gaming-cdn.com/images/products/5415/271x377/dont-starve-together-cover.jpg',
                bgUrl:'https://s1.gaming-cdn.com/images/products/5415/screenshot/dont-starve-together-wallpaper-1.jpg',
                price: 754
              }, 
            {
                id: 23,
                name: 'Warhammer: Vermintide 2',
                posterUrl: 'https://s1.gaming-cdn.com/images/products/2754/271x377/warhammer-vermintide-2-collectors-edition-cover.jpg',
                bgUrl:'https://s1.gaming-cdn.com/images/products/2754/screenshot/warhammer-vermintide-2-collectors-edition-wallpaper-1.jpg',
                price: 750
              }, 
            {
                id: 24,
                name: 'Left 4 Dead 2 (Steam)',
                posterUrl: 'https://s2.gaming-cdn.com/images/products/733/271x377/left-4-dead-2-cover.jpg',
                bgUrl:'https://s2.gaming-cdn.com/images/products/733/screenshot/left-4-dead-2-wallpaper-1.jpg',
                price: 920
              }, 
          ]
      },
      rpg:{
        id: 4,
        title: 'RPG',
        routeName: 'rpg',
        color: 'teal',
        items: [
          {
              id: 30,
              name: 'The Witcher 3: Wild Hunt',
              posterUrl: 'https://s2.gaming-cdn.com/images/products/268/271x377/the-witcher-3-wild-hunt-cover.jpg',
              bgUrl:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn3.dualshockers.com%2Fwp-content%2Fuploads%2F2015%2F04%2FWitcher3.jpg&f=1&nofb=1',
              price: 1078
            }, 
          {
              id: 31,
              name: 'Divinity: Original Sin ',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/384/271x377/divinity-original-sin-enhanced-edition-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/384/screenshot/divinity-original-sin-enhanced-edition-wallpaper-1.jpg',
              price: 2400
            }, 
          {
              id: 32,
              name: 'South Park: The Stick of Truth ',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/198/271x377/south-park-the-stick-of-truth-uncut-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/198/screenshot/south-park-the-stick-of-truth-uncut-wallpaper-3.jpg',
              price: 820
            }, 
          {
              id: 33,
              name: 'Kingdom Come: Deliverance',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/4362/271x377/kingdom-come-deliverance-royal-edition-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/4362/screenshot/kingdom-come-deliverance-royal-edition-wallpaper-2.jpg',
              price: 2392
            }, 
          {
              id: 34,
              name: 'The Elder Scrolls V: Skyrim',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/1512/271x377/the-elder-scrolls-v-skyrim-special-edition-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/1512/screenshot/the-elder-scrolls-v-skyrim-special-edition-wallpaper-1.jpg',
              price: 1632
            }, 
        ]
      },
      strategy:{
        id: 5,
        title: 'Strategy',
        routeName: 'strategy',
        color: 'blue',
        items: [
          {
              id: 40,
              name: 'Age of Empires III',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/825/271x377/age-of-empires-iii-complete-collection-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/825/screenshot/age-of-empires-iii-complete-collection-wallpaper-2.jpg',
              price: 3109
            }, 
          {
              id: 41,
              name: 'Crusader Kings III Royal Edition',
              posterUrl: 'https://s3.gaming-cdn.com/images/products/7289/271x377/crusader-kings-iii-royal-edition-cover.jpg',
              bgUrl:'https://s3.gaming-cdn.com/images/products/7289/screenshot/crusader-kings-iii-royal-edition-wallpaper-5.jpg',
              price: 4150
            }, 
          {
              id: 42,
              name: 'Command & Conquer 4',
              posterUrl: 'https://s1.gaming-cdn.com/images/products/846/271x377/command-conquer-4-tiberian-twilight-cover.jpg',
              bgUrl:'https://s1.gaming-cdn.com/images/products/846/screenshot/command-conquer-4-tiberian-twilight-wallpaper-4.jpg',
              price: 520
            }, 
          {
              id: 43,
              name: 'Total War: Three Kingdoms',
              posterUrl: 'https://s2.gaming-cdn.com/images/products/7402/271x377/total-war-three-kingdoms-%e2%80%93-royal-edition-cover.jpg',
              bgUrl:'https://s2.gaming-cdn.com/images/products/7402/screenshot/total-war-three-kingdoms-%e2%80%93-royal-edition-wallpaper-2.jpg',
              price: 2157
            }, 
          {
              id: 44,
              name: 'Company of Heroes 2',
              posterUrl: 'https://s3.gaming-cdn.com/images/products/197/271x377/company-of-heroes-2-cover.jpg',
              bgUrl:'https://s3.gaming-cdn.com/images/products/197/screenshot/company-of-heroes-2-wallpaper-5.jpg',
              price: 220
            }, 
        ]
      }
    }

export default SHOP_DATA;