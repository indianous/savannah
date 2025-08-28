import express from "express";
import { createInstagramAccountController } from "./controllers/instagram/account/create";
import { updateInstagramAccountController } from "./controllers/instagram/account/update";
import { deleteInstagramAccountController } from "./controllers/instagram/account/delete";
import { readInstagramAccountController } from "./controllers/instagram/account/read";
import { readAllInstagramAccountController } from "./controllers/instagram/account/read-all";

const router = express.Router();

router.post("/instagram/account/", (req, res) =>
  createInstagramAccountController.handler(req, res)
);
router.get("/instagram/account/:id", (req, res) => {
  readInstagramAccountController.handler(req, res);
});
router.get("/instagram/accounts/", (req, res) => {
  readAllInstagramAccountController.handler(req, res);
});
router.put("/instagram/account/:id", (req, res) =>
  updateInstagramAccountController.handler(req, res)
);
router.delete("/instagram/account/", (req, res) =>
  deleteInstagramAccountController.handler(req, res)
);

export { router };
