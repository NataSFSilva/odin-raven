import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	return res.status(200).json("Olá, dev!");
});

router.post("/teste", (req, res) => {
	console.log(req.body);

	return res.status(201).json(req.body.mensagem);
});

export { router };