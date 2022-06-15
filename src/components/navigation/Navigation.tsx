import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItemModel from '../../models/navigation-item.model';
import NavigationService from '../../services/navigation.service';
import NavigationItem from './NavigationItem';

import './Navigation.scss';

function Navigation() {
  const navigation = NavigationService.getNavigation();
  console.log(navigation);

  return (
    <div className="Navigation">
      <h2 className="p-2">{navigation.title}</h2>
      {navigation.items.map((navItem: NavigationItemModel) => (
        <NavigationItem key={navItem.title} title={navItem.title} route={navItem.route}></NavigationItem>
      ))}
      <Link to="/overview">overview</Link> | <Link to="/map">map</Link>
    </div>
  );
}

export default Navigation;
