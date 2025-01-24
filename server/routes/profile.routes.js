import express from "express"
import { deleteProfile, getProfile } from "../controllers/profile.controller.js"


const profilerouter = express.Router()

profilerouter.route("/getprofile").get(getProfile)
profilerouter.route("/deleteprofile").delete(deleteProfile)


export {profilerouter}