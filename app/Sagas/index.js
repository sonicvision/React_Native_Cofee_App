import coffeeTypes from "../Types/coffee";
import galleryTypes from "../Types/gallery";
import * as coffeeSagas from "../Sagas/coffee";
import * as gallerySagas from "../Sagas/gallery";
import { takeEvery } from "redux-saga";

export default function* rootSaga() {
  yield [
    takeEvery(coffeeTypes.OUTLET_FETCH_REQUESTED, coffeeSagas.fetchOutlets),
    takeEvery(
      galleryTypes.IMAGES_FETCH_REQUESTED,
      gallerySagas.fetchImagesForGallery
    )
  ];
}
