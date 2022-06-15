import { Link } from 'react-router-dom';

import NavigationItemModel from '../../models/navigation-item.model';

import './NavigationItem.scss';

function NavigationItem(navigationItem: NavigationItemModel) {
  return (
    <Link className="NavigationItem py-2 px-2" to={navigationItem.route}>
      {navigationItem.title}
    </Link>
  );
}

export default NavigationItem;
