import loginModeReducer from './loginModeReducer';

describe('Test loginModeReducer', () => {

    test('initial state should be empty', () => {
        let action = {};
        let returnedState = loginModeReducer( undefined, action);
        expect( returnedState ).toEqual( 'login' );
    })

    test('check that login  action sets state to login', () => {
         let action = { type: 'SET_TO_LOGIN_MODE'};
         let returnedState = loginModeReducer(undefined, action);
         expect(returnedState).toEqual( 'login' );
    })

    test('check that register action sets state to register', () => {
         let action = { type: 'SET_TO_REGISTER_MODE'};
         let returnedState = loginModeReducer(undefined, action);
         expect(returnedState).toEqual( 'register' );
    })

     test('check that registerdetox action sets state to registerdetox', () => {
         let action = { type: 'SET_TO_REGISTER_DETOX_MODE'};
         let returnedState = loginModeReducer(undefined, action);
         expect(returnedState).toEqual( 'detoxregister' );
    })

    test('test that unexpected action type routes to login', () => {
         let action = { type: 'FOO_BAR' };
         let returnedState = loginModeReducer(undefined, action);
         expect(returnedState).toEqual( 'login' );
    })

})