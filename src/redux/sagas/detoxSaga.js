import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

// saga to send contact information to server
function* increaseSaga(action) {
    console.log('in increaseSaga', action.payload );
    const reqId = action.payload;
    // standred js way to handle errors
    try {
        const response = yield call(axios.put, `/detox/increase/${reqId}`, {
            currentBedCount: action.payload
        });
        yield put({
            type: 'SET_BED_COUNT',
            payload: response.data
        });
         yield put({
             type: 'GET_DETOX_INFO_BY_ID',
             payload: action.payload
         });
          yield put({
              type: 'GET_DETOX_INFO'
          });
    } catch (error) {
        console.log('error with detox increase put request', error);
    }
}

// // saga to send decrease bed count to server
function* decreaseSaga(action) {
    console.log('in decreaseSaga', action.payload );
     const reqId = action.payload;
    // standred js way to handle errors
    try {
        const response = yield call(axios.put, `/detox/decrease/${reqId}`, {
            currentBedCount: action.payload
        });
        yield put({
            type: 'SET_BED_COUNT',
            payload: response.data
        });
          yield put({
             type: 'GET_DETOX_INFO_BY_ID',
             payload: action.payload
         });
         yield put({
             type: 'GET_DETOX_INFO'
         });
    } catch (error) {
        console.log('error with decrease put request', error);
    }
}

// saga to get detox info by id from server
function* getDetoxInfoByIdSaga(action) {
    console.log('in getDetoxInfoSaga', action.payload);
    const reqId = action.payload;
    try {
        const response = yield call(axios.get, `/detox/detoxinfo/${reqId}`, {
            currentBedCount: action.payload
        });
        yield put({
            type: 'SET_DETOX_INFO',
            payload: response.data
        });
    } catch (error) {
        console.log('error with get request', error);
    }
}

// saga to get all detox info by id from server
function* getDetoxInfoSaga(action) {
    console.log('in getDetoxInfoSaga');
    try {
        const response = yield call(axios.get, `/detox/detoxinfo`);
        yield put({
            type: 'SET_All_DETOX_INFO',
            payload: response.data
        });
    } catch (error) {
        console.log('error with get request', error);
    }
}

// saga to get detox lat and lng for detox now default view
// saga to get all detox info by id from server
function* getDetoxWithLowestBedCountSaga(action) {
    console.log('in getDetoxWithLowestBedCountSaga');
    try {
        const response = yield call(axios.get, `/detox/mincurrentbeds`);
        yield put({
            type: 'SET_DETOX_LAT_LNG',
            payload: response.data
        });
    } catch (error) {
        console.log('error with get request', error);
    }
}


function* detoxSaga() {
    yield takeLatest('INCREASE', increaseSaga);
    yield takeLatest('DECREASE', decreaseSaga);
    yield takeLatest('GET_DETOX_INFO_BY_ID', getDetoxInfoByIdSaga);
    yield takeLatest('GET_DETOX_INFO', getDetoxInfoSaga);
    yield takeLatest('GET_DETOX_WITH_LOWEST_BED_COUNT', getDetoxWithLowestBedCountSaga)
}

export default detoxSaga;