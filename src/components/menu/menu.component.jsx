import React from 'react'
import './menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'


class Menu extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:[
                {
                  title: 'action',
                  imageUrl: 'https://wallpapercave.com/wp/wp2872539.jpg',
                  id: 1,
                  linkUrl: 'genre/action',
                  color:'pink'
                },
                {
                  title: 'adventure',
                  imageUrl: 'https://wallpapercave.com/wp/wp2605453.jpg',
                  id: 2,
                  linkUrl: 'genre/adventure',
                  color:'yellow'
                },
                {
                  title: 'mmo',
                  imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2014%2F06%2F24%2F378150%2Fe6667b7ae98044d91c567e3137c2a4f6.jpg&f=1&nofb=1',
                  id: 3,
                  linkUrl: 'genre/mmo',
                  color:'green'
                },
                {
                  title: 'rpg',
                  imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fe%2Fe%2F2%2F136164-large-witcher-3-background-1920x1080.jpg&f=1&nofb=1',
                  size: 'large',
                  id: 4,
                  linkUrl: 'genre/role-playing',
                  color:'teal'
                },
                {
                  title: 'strategy',
                  imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3151809.png&f=1&nofb=1',
                  size: 'large',
                  id: 5,
                  linkUrl: 'genre/strategy',
                  color:'blue'
                }
              ]
              
        }
    }

    render(){

        return(
            <div className='menu'>
                    {this.state.sections.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    })}
            </div>
        )
    }
}

export default Menu;
