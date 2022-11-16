enum COFFEE_TAGS {
  "tradicional" = "TRADICIONAL",
  "com leite" = "COM LEITE",
  "alcoólico" = "ALCOÓLICO",
  "gelado" = "GELADO",
  "especial" = "ESPECIAL",
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: COFFEE_TAGS[];
  image: string;
}
