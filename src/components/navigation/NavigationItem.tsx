import React from 'react';

import NavigationItemModel from '../../models/navigation-item.model';

import './NavigationItem.scss';

function NavigationItem(navigationItem: NavigationItemModel) {
  console.log(navigationItem);

  return <div className="NavigationItem py-2 px-2">{navigationItem.title}</div>;
}

export default NavigationItem;
