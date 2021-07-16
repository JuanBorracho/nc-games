import { useContext, useEffect } from 'react';
import { UserContext } from '../Utils/User';
import { fetchUserByUsername } from '../Utils/apis';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    return fetchUserByUsername(user.username).then((response) => {
      setUser({
        username: response.username,
        avatar_url: response.avatar_url,
      });
    });
  }, [setUser, user.username]);

  return (
    <header>
      <div className="Header-title">
        <Link to={'/'}>
          <h1>NC Game Reviews</h1>
        </Link>
        <p>All the latest reviews of the games you love the most</p>
      </div>

      <nav>
        <Link to={'/'}>
          <p>Reviews</p>
        </Link>
        <div className="status-online">
          <p>{user.username}</p>
          <div className="online">
            <div className="green-dot"></div>
            <p>Online</p>
          </div>
        </div>
        <img alt={user.username} src={user.avatar_url} />
      </nav>
    </header>
  );
};

export default Header;
