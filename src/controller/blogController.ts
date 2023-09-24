import Blog from "../model/blog"
import schema from "../validator/blog"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcryptjs";
import { STATUS_CODES } from "http";


interface Body {
    username: string;
    email: string;
    password: string;
}


const CreatedUserAccount = async (req: Request, res: Response) => {

    const { username, password }: Body = req.body

    const { error } = schema(req.body);

    if (error) {
        return res.status(STATUS_CODES.BAD_REQUEST).json({
            message: error,
        })
    }

    try {
        const userExist = await Blog.findOne({ username })
    } catch (error) {
        
    }


}