import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(savedUser) });
    }
  }, []);

  const login = (email, password) => {
    // In a real app, this would make an API call
    const user = {
      id: 1,
      email,
      name: email.split('@')[0],
      avatar: 'https://via.placeholder.com/40'
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'LOGIN', payload: user });
    return Promise.resolve(user);
  };

  const register = (userData) => {
    // In a real app, this would make an API call
    const user = {
      id: Date.now(),
      ...userData,
      avatar: 'https://via.placeholder.com/40'
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'REGISTER', payload: user });
    return Promise.resolve(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};