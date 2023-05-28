import React from "react";
import TextPhotoSideTemplate from "./TextPhotoSideTemplate";
import PhotoTitleLocation from "../TextPhotoSide/components/PhotoTitleLocation";
import TwoPhotosComp from "../TextPhotoSide/components/TwoPhotosComp";

export default function TextPhotoSide() {
  return (
    <TextPhotoSideTemplate
      photoTitleLocation={<PhotoTitleLocation />}
      twoPhotosComp={<TwoPhotosComp />}
    />
  );
}
