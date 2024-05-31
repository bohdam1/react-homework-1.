import user from '../path/user'
import data  from '../path/data'
import friends from '../path/friends'
import transaction from '../path/transactions'

import {UserProfile} from 'components/user/user'
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/friendlist'
import {Transaction} from 'components/Transaction/transaction'




export const App = () => {
  
  return (
    <>
    <UserProfile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
    <Statistics  stats={data} />
    
    <FriendList friends={friends}/>
    <Transaction items={transaction} />
    </>
  );
};

