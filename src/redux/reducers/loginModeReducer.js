const loginMode = (state = 'login', action) => {
    switch (action.type) {
      case 'SET_TO_LOGIN_MODE':
        return 'login';
      case 'SET_TO_REGISTER_MODE':
        return 'register';
        case 'SET_TO_REGISTER_DETOX_MODE':
        return 'detoxregister';
      default:
        return state;
    }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default loginMode;
  