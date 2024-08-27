import { useState } from "react";
import Header from "../components/Header";
import { ListarProdutos } from "../components/ListarProdutos";

const produtos = [
  {
    id: 1,
    nome: "Katana Dourada",
    valor: 1500,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbekOIqGznjTCbUE2zuZrxbx5MQl4sJNyGdA&s",
    material: "Aço Damasco",
    tamanho: "105 cm",
    peso: 1.2,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 2,
    nome: "Wakizashi Tradicional",
    valor: 1000,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_867218-MLB25974532034_092017-O.webp",
    material: "Aço Carbono",
    tamanho: "75 cm",
    peso: 0.8,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 3,
    nome: "Tanto Cerimonial",
    valor: 800,
    imagem:
      "https://image.invaluable.com/housePhotos/phoebus/57/651257/H1098-L179489082.jpg",
    material: "Aço Inoxidável",
    tamanho: "50 cm",
    peso: 0.6,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 4,
    nome: "Katana Sangue do Dragão",
    valor: 2000,
    imagem:
      "https://portal.crosster.com.br/wp-content/uploads/2019/06/294788-espada-japonesa-katana-o-que-voce-precisa-saber-940x629.jpg",
    material: "Aço Damasco",
    tamanho: "110 cm",
    peso: 1.4,
    itens: ["tsuba", "caixa", "saco de algodão", "adesivos"],
  },
  {
    id: 5,
    nome: "Shirasaya Minimalista",
    valor: 1200,
    imagem:
      "https://cdn11.bigcommerce.com/s-l7k6ny8fd9/images/stencil/608x608/products/1062/4539/SS2010K_-_SHIRASAYA_-_BLACK_-_A__14971.1678841222.jpg?c=2",
    material: "Aço Carbono",
    tamanho: "100 cm",
    peso: 1.1,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 6,
    nome: "Ninjato Silencioso",
    valor: 1100,
    imagem: "https://www.uwbk.com.br/images/stories/Shinobizue.jpg",
    material: "Aço Inoxidável",
    tamanho: "90 cm",
    peso: 1.0,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 7,
    nome: "Katana Clássica Negra",
    valor: 1700,
    imagem:
      "https://musashiswords.com/cdn/shop/files/SS783BK_00.jpg?v=1709916625&width=1445",
    material: "Aço Damasco",
    tamanho: "105 cm",
    peso: 1.3,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 8,
    nome: "Wakizashi Elegante",
    valor: 950,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_801631-MLB41303725573_042020-O.webp",
    material: "Aço Carbono",
    tamanho: "78 cm",
    peso: 0.9,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 9,
    nome: "Tanto Afiado",
    valor: 700,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_681601-MLB20367406630_082015-O.webp",
    material: "Aço Negro",
    tamanho: "55 cm",
    peso: 0.5,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 10,
    nome: "Katana Flor de Cerejeira",
    valor: 1800,
    imagem:
      "https://nimofan.com/cdn/shop/files/5310872401081414Katana-436616.jpg?v=1715708613",
    material: "Aço Damasco",
    tamanho: "108 cm",
    peso: 1.4,
    itens: ["tsuba", "caixa", "saco de algodão", "adesivos"],
  },
  {
    id: 11,
    nome: "Shirasaya de Bambu",
    valor: 1300,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_700121-MLB20685704302_042016-O.webp",
    material: "Aço Carbono",
    tamanho: "102 cm",
    peso: 1.2,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 12,
    nome: "Katana Escarlate",
    valor: 1900,
    imagem:
      "https://www.chinesesword.store/cdn/shop/products/katana_12_b11446b0-09f0-4d2d-b8fd-c009d775078f.jpg?v=1579764084&width=1445",
    material: "Aço Damasco",
    tamanho: "107 cm",
    peso: 1.5,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 13,
    nome: "Wakizashi Prata Lunar",
    valor: 1050,
    imagem:
      "https://boxkatana.com/cdn/shop/files/handmade-japanese-wakizashi-black-moon-damascus-steel-39951014101283.jpg?v=1684911430&width=720",
    material: "Aço Inoxidável",
    tamanho: "80 cm",
    peso: 0.85,
    itens: ["caixa", "saco de algodão"],
  },
  {
    id: 14,
    nome: "Tanto Veloz",
    valor: 850,
    imagem:
      "https://i.ytimg.com/vi/LC6cvzvHdCo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmnEBYG_IMSzkRNKZZGSPUwRfS_A",
    material: "Aço Carbono",
    tamanho: "58 cm",
    peso: 0.55,
    itens: ["tsuba", "caixa", "saco de algodão"],
  },
  {
    id: 15,
    nome: "Katana Dragão Azul",
    valor: 2100,
    imagem: "https://i.ebayimg.com/images/g/gMgAAOSwi~1iAk8f/s-l1200.jpg",
    material: "Aço Damasco",
    tamanho: "110 cm",
    peso: 1.6,
    itens: ["tsuba", "caixa", "saco de algodão", "adesivos"],
  },
];

export default function Produtos() {
  const [listaProdutos, setListaProdutos] = useState(produtos);
  return (
    <>
      <Header />
      <h1>Produtos Disponíveis</h1>
      <ListarProdutos produtos={listaProdutos} />
    </>
  );
}
