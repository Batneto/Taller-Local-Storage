//Declaramos en una variable un array de deportes.
let deportes = ["futbol", "baloncesto", "tenis"];
//Guardamos en el localStorage dicha variable con la clave "arrayDeportes".
localStorage.setItem("arrayDeportes", deportes);
//"Pusheamos un nuevo deporte a nuestro array existente".
deportes.push("natación");
//Guardamos de nuevo en el localStorage.
localStorage.setItem("arrayDeportes", JSON.stringify(deportes))