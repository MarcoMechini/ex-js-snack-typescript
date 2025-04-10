let datoGenerico: unknown = new Promise((resolve) => resolve(1));

if (typeof datoGenerico === 'string') {
  console.log(datoGenerico.toLocaleUpperCase());
}else if (typeof datoGenerico === 'number') {
  console.log(datoGenerico * 2);
}else if (typeof datoGenerico === 'boolean') {
  console.log(datoGenerico ? 'Si': 'No');
}else if (datoGenerico === null) {
  console.log('Il dato è vuoto');
}else if (Array.isArray(datoGenerico)) {
  console.log(datoGenerico.length);
}else if (datoGenerico instanceof Promise) {
  console.log(await datoGenerico);
}
else{
  console.log('Tipo non supportato');  
  console.log(datoGenerico);  
}