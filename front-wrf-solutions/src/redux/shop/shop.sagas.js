import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import { collection, getDocs } from '@firebase/firestore'

import {
  db,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import { ShopActionTypes } from './shop.types'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionsAsync(collectionsKey) {
  try {
    const collectionSnapshot = yield getDocs(collection(db, collectionsKey))
    if (collectionSnapshot.empty) {
      throw new Error(
        `There is no doc found in the ${collectionsKey} requested`
      )
    }
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collectionSnapshot
    )
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
    'collections'
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
