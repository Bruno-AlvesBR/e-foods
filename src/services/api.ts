import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:4444",
})

export const produtos = [
  {
    id: "alimentos-1",
    src: "alimentos1.jpg",
    price: 11.5,
    name: "Arroz Namorado",
    marca: "Namorado",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-2",
    src: "alimentos2.jpg",
    price: 11.99,
    name: "Arroz Tio João",
    marca: "Tio João",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-3",
    src: "alimentos3.jpg",
    price: 12.5,
    name: "Arroz Pilecco",
    marca: "Pilecco",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-4",
    src: "alimentos4.jpg",
    price: 12.99,
    name: "Arroz Urbano",
    marca: "Urbano",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-5",
    src: "alimentos5.jpg",
    price: 6.75,
    name: "Feijão Kicaldo",
    marca: "Kicaldo",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-6",
    src: "alimentos6.jpg",
    price: 7.2,
    name: "Feijão Máximo",
    marca: "Máximo",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-7",
    src: "alimentos7.jpg",
    price: 7.5,
    name: "Feijão preto Kicaldo",
    marca: "Kicaldo",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-8",
    src: "alimentos8.jpg",
    price: 7.99,
    name: "Feijão Camil",
    marca: "Camil",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-9",
    src: "alimentos9.jpg",
    price: 1.5,
    name: "Hambúrguer Aurora",
    marca: "Aurora",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-10",
    src: "alimentos10.jpg",
    price: 25.2,
    name: "Hambúrguer Seara",
    marca: "Seara",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-11",
    src: "alimentos11.jpg",
    price: 26.7,
    name: "Hambúrguer Texas",
    marca: "Texas",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-12",
    src: "alimentos12.jpg",
    price: 12.35,
    name: "Favo de ovos",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "alimentos-13",
    src: "alimentos13.jpg",
    price: 5.75,
    name: "Favo de ovos",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Alimentos"
  },
  {
    id: "eletro-1",
    src: "eletro1.jpg",
    price: 399.9,
    name: "Air Fryer Walita",
    parcelamento: ["3", "133,30"],
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Eletrodomesticos"
  },
  {
    id: "eletro-2",
    src: "eletro2.jpg",
    price: 179.3,
    name: "Triturador de frutas",
    parcelamento: ["3", "59,76"],
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Eletrodomesticos"
  },
  {
    id: "eletro-3",
    src: "eletro3.jpg",
    price: 465.75,
    name: "Micro-ondas de vidro",
    parcelamento: ["3", "155,25"],
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Eletrodomesticos"
  },
  {
    id: "eletro-4",
    src: "eletro4.jpg",
    price: 277.89,
    name: "Batedeira automática",
    parcelamento: ["3", "92,63"],
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Eletrodomesticos"
  },
  {
    id: "eletro-5",
    src: "eletro5.jpg",
    price: 421.2,
    name: "Air Fryer",
    parcelamento: ["3", "140,40"],
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Eletrodomesticos"
  },
  {
    id: "limpeza-1",
    src: "limpeza1.jpg",
    price: 1.65,
    name: "Detergente Minuano",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-2",
    src: "limpeza2.jpg",
    price: 1.79,
    name: "Detergente Limpol",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-3",
    src: "limpeza3.jpg",
    price: 1.99,
    name: "Detergente Ypê",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-4",
    src: "limpeza4.jpg",
    price: 8.75,
    name: "Amaciante Dawny",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-5",
    src: "limpeza5.jpg",
    price: 9.89,
    name: "Amaciante Dawny",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-6",
    src: "limpeza6.png",
    price: 3.79,
    name: "Veja",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-7",
    src: "limpeza7.jpg",
    price: 3.79,
    name: "Veja",
    tipo: "super",
    icon: "bx bxs-zap",
    rating: 4,
    categoria: "Limpezas"
  },
  {
    id: "limpeza-8",
    src: "limpeza8.jpg",
    price: 2.55,
    name: "Bucha de lavar louça",
    tipo: "grátis",
    icon: "bx bxs-truck",
    rating: 4,
    categoria: "Limpezas"
  }
]