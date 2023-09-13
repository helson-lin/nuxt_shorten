import { User } from "~/models/users";
import { Link } from "~/models/links";
export default defineEventHandler(async (event) => {
  try {
    console.log( Date.now())
    Link.create({
        url: 'https://localhost',
        uid: 'wu8129dsad',
        period: Date.now()
    })
    await useStorage().setItem("redis:admin", { hello: "wallet" });
    return "Data is set";
  } catch (e) {
    console.log(e);
  }
});
