import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import NavigationItemModel from '../../models/navigation-item.model';
import NavigationService from '../../services/navigation.service';
import NavigationState from '../../enums/navigation-state.enum';
import NavigationItem from './NavigationItem';

import './Navigation.scss';

function Navigation() {
  const [navState, setNavState] = useState(NavigationState.expanded);
  const navigation = NavigationService.getNavigation();

  return (
    // TODO: is there a better way to do conditional classes. What if there are multiple conditionals?
    <div className={navState === NavigationState.expanded ? 'Navigation expanded' : 'Navigation collapsed'}>
      <div className="title-and-icon p-2">
        <FontAwesomeIcon
          className={navState === NavigationState.expanded ? 'nav-icon' : 'nav-icon collapsed'}
          icon={faCoffee}
          size="2x"
          onClick={() => setNavState(navState === NavigationState.collapsed ? NavigationState.expanded : NavigationState.collapsed)}
        />
        <h2 className={navState === NavigationState.expanded ? 'title' : 'title d-none'}>{navigation.title}</h2>
        {/* <h2 className="title d">{navState === NavigationState.expanded ? navigation.title : ''}</h2> */}
      </div>
      {navigation.items.map((navItem: NavigationItemModel) => (
        // TODO: Is there a better way to do this? Can I pass the model as a single prop, instead of
        // passing individual properties, as this will not scale well if there are lots of properties in the
        // nav item object
        <NavigationItem key={navItem.title} title={navItem.title} route={navItem.route}></NavigationItem>
      ))}
    </div>
  );
}

export default Navigation;
