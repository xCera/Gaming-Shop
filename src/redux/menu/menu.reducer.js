const INITIAL_STATE ={
    sections:[
        {
          title: 'action',
          imageUrl: 'https://wallpapercave.com/wp/wp2872539.jpg',
          id: 1,
          linkUrl: 'shop/action',
          color:'pink'
        },
        {
          title: 'adventure',
          imageUrl: 'https://wallpapercave.com/wp/wp2605453.jpg',
          id: 2,
          linkUrl: 'shop/adventure',
          color:'yellow'
        },
        {
          title: 'co-op',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2014%2F06%2F24%2F378150%2Fe6667b7ae98044d91c567e3137c2a4f6.jpg&f=1&nofb=1',
          id: 3,
          linkUrl: 'shop/cooperative',
          color:'green'
        },
        {
          title: 'rpg',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fe%2Fe%2F2%2F136164-large-witcher-3-background-1920x1080.jpg&f=1&nofb=1',
          size: 'large',
          id: 4,
          linkUrl: 'shop/rpg',
          color:'teal'
        },
        {
          title: 'strategy',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3151809.png&f=1&nofb=1',
          size: 'large',
          id: 5,
          linkUrl: 'shop/strategy',
          color:'blue'
        }
      ]
}

const menuReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default menuReducer;