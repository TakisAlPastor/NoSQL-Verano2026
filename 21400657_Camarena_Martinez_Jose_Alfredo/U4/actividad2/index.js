const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;

app.use(morgan("dev"));

// Ejercicio 1: Numero par o impar
app.get("/par/:numero", (req, res) => {
  const numero = req.params.numero;
  const tipo = numero % 2 == 0 ? "par" : "impar";
  res.send(`${numero} es un número ${tipo}`);
});

// Ejercicio 2: Mayor de edad
app.get("/edad/:edad", (req, res) => {
  const edad = req.params.edad;
  res.send(`Eres ${edad >= 18 ? "mayor" : "menor"} de edad`);
});

// Ejercicio 3: Calculadora
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
  const op = req.params.operacion;
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  let resultado;

  switch (op) {
    case "suma":
      resultado = a + b;
      break;
    case "resta":
      resultado = a - b;
      break;
    case "multiplicacion":
      resultado = a * b;
      break;
    case "division":
      resultado = a / b;
      break;
    default:
      res.send("Operación no válida");
      break;
  }

  res.send(`Resultado: ${resultado}`);
});

//Ejercicio 4: Tabla de multiplicar
app.get("/tabla/:numero", (req, res) => {
  const numero = req.params.numero;
  const tabla = [];

  for (let i = 1; i <= 10; i++) {
    tabla.push(`${numero} X ${i} = ${numero * i}`);
  }

  res.send(tabla);
});

// Ejercicio 5: Calificación
app.get("/calificacion/:nota", (req, res) => {
  const nota = req.params.nota;
  let calificacion;

  if (nota >= 90) calificacion = "Excelente";
  else if (nota >= 80) calificacion = "Muy bien";
  else if (nota >= 70) calificacion = "Aprobado";
  else calificacion = "Reprobado";

  res.send(calificacion);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en localhost:${port}`);
});
