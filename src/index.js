import { agregarCamper, listarCampers, buscarCamperPorNombre } from './campers.js';

const [, , comando, arg1, arg2] = process.argv;

try {
  switch (comando) {
    case 'agregar': {
     
      const c = await agregarCamper(arg1, arg2);
      console.log(' Camper registrado:', c);
      break;
    }

    case 'listar': {
      const lista = await listarCampers();
      if (lista.length === 0) {
        console.log(' No hay campers aún.');
      } else {
        console.table(lista);
      }
      break;
    }

    default:
      console.log(' Comando no válido. Usa: agregar, listar o buscar');
  }
} catch (error) {
  console.error(' Error:', error.message);
}