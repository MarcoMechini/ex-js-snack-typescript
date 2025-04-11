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

// snack 2 
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita : number,
  sesso : 'm' | 'f',
  anniDiServizio : number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}

const Dip1 : Dipendente ={
  nome : 'Paolo',
  cognome: 'Rossi',
  annoNascita : 1980,
  sesso : 'm',
  anniDiServizio : [2000,2001],
  emailAziendale: 'apolsdfasdg',
  contratto: 'indeterminato'
}

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior' ,
  linguaggi?: string[],
  certificazioni: string[]
}
type ProjectManager = Dipendente & {
  teamSize : number | null ,
  budgetGestito?: number,
  stakeholderPrincipali  : string[]
}
type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  memebri: [ProjectManager, Developer, ...Developer[]]
}

