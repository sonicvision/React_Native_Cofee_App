import { put, call } from "redux-saga/effects";
import types from "../Types/gallery";
import * as Api from "../Services/Api";

export function* fetchImagesForGallery() {
  try {
    yield put({ type: types.IMAGES_FETCH_PENDING });
    //console.log("In SAGA");
    const json = yield call(Api.fetchImagesForGallery);
    // console.log("Data is" + JSON.stringify(json));
    yield put({ type: types.IMAGES_FETCH_SUCCEEDED, images: json.results });
  } catch (e) {
    yield put({ type: types.IMAGES_FETCH_FAILED, message: e.message });
  }
}
