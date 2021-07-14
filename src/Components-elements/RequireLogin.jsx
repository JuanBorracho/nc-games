import { useContext, useState } from 'react';
import { UserContext } from '../Utils/User';

const RequireLogin = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [selectedUsername, setSelectedUsername] = useState('');

  const handleSubmit = (event) => {
    setUser({ username: selectedUsername });
    event.preventDefault();
  };

  if (user.username) return children;
  return (
    <section className="sign-in-background">
      <section className="sign-in">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <p className="sign-in-text">
            Select a user below to sign in and enjoy the wonderful world of NC
            Game Reviews!
          </p>
          <label htmlFor="username">Username:</label>
          <select
            id="username"
            onChange={(event) => setSelectedUsername(event.target.value)}
          >
            <option value="">Select an option</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="grumpy19">grumpy19</option>
            <option value="jessjelly">jessjelly</option>
          </select>

          <button>Login</button>
        </form>
      </section>
    </section>
  );
};

export default RequireLogin;
