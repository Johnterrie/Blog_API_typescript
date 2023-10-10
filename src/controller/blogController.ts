import Blog from "../model/blog"
import schema from "../validator/blog"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcryptjs";
import { STATUS_CODES } from "http";

const CreatedUserAccount = async (req: Request, res: Response) => {

    const { username, password } = req.body as any

}
