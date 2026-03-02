export interface Guitar {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

// Podemos aplicar herencia y solo agregar lo que nos hace falta
export type CartItem = Guitar & {
  quantity: number;
};

// Usando PICK para solo TOMAR ciertas propiedades de la interface
// export type CartItem = Pick<Guitar, "id" | "name"> & {
//   quantity: number;
// };

// Usando OMIT para OMITIR ciertos propiedades de la interface
// export type CartItem = Omit<Guitar, "id" | "name"> & {
//   quantity: number;
// };

// Otra manera con INTERFACE
// export in terface CartItem extends Guitar {
//     quantity: number
// }

// Solo tomar una propiedad
// export type GuitarID = Pick<Guitar, "id">;

// Tomar una sola propiedad SOLO UNA SIN PICK
export type GuitarID = Guitar["id"];
