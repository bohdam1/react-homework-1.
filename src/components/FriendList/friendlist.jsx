import css from './friendlist.module.css'
import PropTypes from 'prop-types';
import {FriendItem} from 'components/frienditem/frienditem'

export const FriendList = ({friends}) =>{
    return(
        <ul className={css.friendlist}>
            {friends.map(friend => (
          <FriendItem key={friend.id} avatar={friend.avatar}  name={friend.name}  isOnline={friend.isOnline} />
        ))}
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })).isRequired
};