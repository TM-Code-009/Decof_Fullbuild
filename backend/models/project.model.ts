import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  client: string;
  desc: string;
  shortDesc: string;
  category: string;
  image: string; 
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    client: { type: String, required: true },
    desc: { type: String, required: true },
    shortDesc: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, 
  },
  { timestamps: true }
);

export default mongoose.model<IProject>("Project", ProjectSchema);