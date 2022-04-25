import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

let logger1 = new MongoLogger() 
let userService = new UserService(logger1)


let user1 = new User(1,"Fatih","Baysal","Istanbul")

userService.add(user1)
userService.getById(1)
userService.list()