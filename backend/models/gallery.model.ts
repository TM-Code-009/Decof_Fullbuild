import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  image: string;
}

const GallerySchema: Schema = new Schema(
  {
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IGallery>("Gallery", GallerySchema);