import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import NavigationItemModel from '../../models/navigation-item.model';
import NavigationService from '../../services/navigation.service';
import NavigationItem from './NavigationItem';

import './Navigation.scss';

function Navigation() {
  const navigation = NavigationService.getNavigation();
  console.log(navigation);

  return (
    <div className="Navigation">
      <div className="title-and-icon p-2">
        <FontAwesomeIcon className="nav-icon" icon={faCoffee} size="lg" />
        <h2 className="title">{navigation.title}</h2>
      </div>
      {navigation.items.map((navItem: NavigationItemModel) => (
        <NavigationItem key={navItem.title} title={navItem.title} route={navItem.route}></NavigationItem>
      ))}
    </div>
  );
}

export default Navigation;
