import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subcriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subcription details' }));

subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE subcription' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subcription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subcription' }));

// GET all the subscriptions belonging to a specific user(this extracts all the subs of a specific user)
subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subcriptions' }));

// This will CANCEL a user subscription
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subcription' }));

// GET all upcoming renewals
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));

export default subscriptionRouter;