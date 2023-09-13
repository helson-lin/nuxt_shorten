import { defineMongooseModel } from "#nuxt/mongoose";

export const Link = defineMongooseModel({
  name: "Link",
  schema: {
    url: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    period: {
      type: Date,
      required: false,
    },
  },
});
