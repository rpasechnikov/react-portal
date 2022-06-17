import { useState } from 'react';
import cx from 'classnames'; // https://www.npmjs.com/package/classnames

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import NavigationService from '../../services/navigation.service';
import NavigationState from '../../enums/navigation-state.enum';
import NavigationItem from './NavigationItem';

import './Navigation.scss';

function Navigation() {
  const [navState, setNavState] = useState(NavigationState.expanded);
  const navigation = NavigationService.getNavigation();

  const navigationClasses = cx('Navigation', {
    expanded: navState === NavigationState.expanded,
    collapsed: navState === NavigationState.collapsed
  });

  const navIconClasses = cx('nav-icon', { collapsed: navState === NavigationState.collapsed });

  return (
    // TODO: is there a better way to do conditional classes. What if there are multiple conditionals?
    // Not natively but there is a popular library called classnames that does this well
    <div className={navigationClasses}>
      <div className="title-and-icon p-2">
        <FontAwesomeIcon
          className={navIconClasses}
          icon={faCoffee}
          size="2x"
          onClick={() => setNavState(navState === NavigationState.collapsed ? NavigationState.expanded : NavigationState.collapsed)}
        />
        <h2 className={navState === NavigationState.expanded ? 'title' : 'title d-none'}>{navigation.title}</h2>
        {/* <h2 className="title d">{navState === NavigationState.expanded ? navigation.title : ''}</h2> */}
      </div>
      {navigation.items.map((navItem) => (
        // TODO: Is there a better way to do this? Can I pass the model as a single prop, instead of
        // passing individual properties, as this will not scale well if there are lots of properties in the
        // nav item object
        // You can use object spread to pass multiple props in one go. You lose a bit of verbosity but it
        // is cleaner
        <NavigationItem key={navItem.title} {...navItem} />
      ))}
    </div>
  );
}

export default Navigation;
