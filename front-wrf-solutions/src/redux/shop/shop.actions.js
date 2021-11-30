import { getDocs, collection } from '@firebase/firestore'

import { ShopActionTypes } from './shop.types'
import {
  db,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  }
}

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = (collectionsKey) => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart())
    // debugger
    // await getDocs(collection(db, 'collection'))
    await getDocs(collection(db, collectionsKey))
      .then((collectionSnapshot) => {
        // debugger
        if (collectionSnapshot.empty) {
          throw new Error(
            `There is no doc found in the ${collectionsKey} requested`
          )
        }
        const collectionsMap =
          convertCollectionsSnapshotToMap(collectionSnapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
  }
}
