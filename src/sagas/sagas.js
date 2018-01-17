import Screen1Sagas from '../modules/screen1/sagas';

export default function* rootSaga() {
    let sagas = [];

    sagas.push(Screen1Sagas);

    yield sagas;
}
