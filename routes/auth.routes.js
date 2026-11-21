import { Router } from "express";

const authRouter = Router();

//response typically won't be just single string usually they're in a Json format.(a JS object with different properties inside of it{title, message, success, status,etc})
authRouter.post('/sign-up', (req, res) => res.send({ title: 'Sign up'}));

authRouter.post('/sign-in', (req, res) => res.send({ title: 'Sign in'}));

authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign out'}));

export default authRouter;