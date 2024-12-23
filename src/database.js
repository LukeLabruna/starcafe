import { connect } from "mongoose"
import { USER_MONGO, PASSWORD_MONGO, DB_MONGO} from "./config/env.config.js"

connect(`mongodb+srv://${USER_MONGO}:${PASSWORD_MONGO}@cluster0.ud53fbh.mongodb.net/${DB_MONGO}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("Connected database"))
  .catch((error) => console.error("Error Establishing a Database Connection", error))