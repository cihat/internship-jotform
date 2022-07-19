export default function Returner<T extends string | boolean | Symbol | number, Y extends number >(param: T, secondParam: Y): boolean {
  return typeof param == typeof secondParam ? true : false;
}

const c = Returner(Symbol(), 23);

console.log(c)

function createHeader<T extends object | [string, any][]>(param: T) {
  const headers = new Headers()

  if (Array.isArray(param)) {
    headers.set(param[0][0], param[0][1])
  }
}

createHeader<[string, any | number | Symbol][]>([
  ['Content-Type', 'application/json'],
  ['Accept', 'application/json'],
  ['Authorization', 'Bearer ' + localStorage.getItem('token')],
  ['Access-Control-Allow-Origin', '*'],
  ['Access-Control-Allow-Methods', ['GET, POST, PUT, DELETE, OPTIONS']],
])