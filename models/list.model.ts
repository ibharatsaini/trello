import mongoose from "mongoose";

const listModel = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  cards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "card",
    },
  ],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  board:{
      type: mongoose.Schema.ObjectId,
      ref: "board",
  },
  order: [
    {
      // taskId: {
      type: mongoose.Schema.ObjectId,
      ref: "task",
      // },
    },
  ],
});

const List = mongoose.model("list", listModel);

export default List;
