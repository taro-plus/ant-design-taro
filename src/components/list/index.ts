import { attachPropertiesToComponent } from 'lib-utils/attach-properties-to-component';
import { List } from './list';
import { ListItem } from './list-item';
import './list.less';

export default attachPropertiesToComponent(List, {
  Item: ListItem,
});
