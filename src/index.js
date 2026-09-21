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
     case 'buscar': {
      if (!arg1) {
        throw new Error('Debes ingresar un término de búsqueda. Ej: node src/index.js buscar "Carlos"');
      }
      const resultados = await buscarCamperPorNombre(arg1);
      if (resultados.length === 0) {
        console.log(`\n🔍 No se encontraron campers que coincidan con "${arg1}".`);
      } else {
        console.log(`\n🔍 Resultados para "${arg1}" (${resultados.length}):`);
        console.table(resultados);
      }
      break;
    }

    default:
      console.log(' Comando no válido. Usa: agregar, listar o buscar');
  }
} catch (error) {
  console.error(' Error:', error.message);
}