const PetController= require("../controllers/pet.controllers");
module.exports = app =>{
    app.get("/api/pet", PetController.findAll);

    app.get("/api/pet/:_id", PetController.findOnePet);

    app.post("/api/pet/new", PetController.CreateOnePet);

    app.put("/api/pet/update/:_id", PetController.updateOnePet);

    app.delete("/api/pet/delete/:_id", PetController.deleteOnePet);
}