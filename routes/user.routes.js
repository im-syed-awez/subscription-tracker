import { Router } from "express";

const userRouter = Router();

// You can have multiple routes with the same-endpoint('/', '/user', etc), but they have to be different HTTP-verbs.

//GET /users(static params) --> get all users
userRouter.get('/', (req, res) => res.send({ title: 'GET all users' })); 

// GET /users/:id(dynamic params) --> get user by id:123
userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details' }));

// POST /create --> to create a new user
userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

// PUT /:id(which user) --> to update
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

// DELETE /:id(which user) --> to delete
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;