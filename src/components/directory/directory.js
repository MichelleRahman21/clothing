import React from 'react';
import MenuItem from '../menu-item/menu-item.js';
import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.imgur.com/4PJCw13.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.imgur.com/SsPtyvv.jpg',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.imgur.com/PqCeBZR.jpg',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.imgur.com/A9AddyI.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.imgur.com/LAqxMD3.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
