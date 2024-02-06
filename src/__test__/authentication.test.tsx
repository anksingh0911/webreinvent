import { authenticateUser } from '../utils/authentication';
import { LOGIN_URL, REGISTER_URL } from '../utils/constant';
import { loginLogout, userError, userRegistration } from '../utils/userSlice';

// Mocking fetch
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

describe('authenticateUser', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should authenticate user for login', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const dispatch = jest.fn();

    // Mocking successful response
    fetchMock.mockResponseOnce(JSON.stringify({ token: 'test_token' }), { status: 200 });

    await authenticateUser(email, password, 'login', dispatch);

    expect(fetchMock).toHaveBeenCalledWith(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    expect(dispatch).toHaveBeenCalledWith(loginLogout(true));
    expect(dispatch).toHaveBeenCalledWith(userRegistration({ token: 'test_token' }));
    expect(dispatch).not.toHaveBeenCalledWith(userError(expect.any(String)));
  });

  it('should handle authentication error', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const dispatch = jest.fn();

    // Mocking failed response
    fetchMock.mockResponseOnce(JSON.stringify({ error: 'Authentication failed' }), { status: 401 });

    await authenticateUser(email, password, 'login', dispatch);

    expect(fetchMock).toHaveBeenCalledWith(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    expect(dispatch).toHaveBeenCalledWith(userError('Authentication failed'));
    expect(dispatch).not.toHaveBeenCalledWith(loginLogout(true));
    expect(dispatch).not.toHaveBeenCalledWith(userRegistration(expect.any(Object)));
  });
});
