import css from './/frienditem.module.css'
import PropTypes from 'prop-types';


export const FriendItem = ({avatar,name,isOnline})=>{
    const statusColor = isOnline ? 'green' : 'red';
    return(
        <li className ={css.item}>
            <span className ={css.status}  style={{ backgroundColor: statusColor }}></span>
            <img className ={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p  className ={css.name}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};