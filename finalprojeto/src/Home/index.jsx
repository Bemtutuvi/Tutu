import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../globals.css";
import { useState } from "react";
import { ListarProdutos } from "../components/ListarProdutos";

const destaques = [
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
];

export default function Home() {
  const [listaDestaque, setListaDestaque] = useState(destaques);

  return (
    <div className="home">
      <Header />
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://katana-japonais.com/cdn/shop/products/1_9e2bb6d7-328d-478d-bbf0-42ace18c2694.jpg?v=1667493823products/0p25vheceluolovfymlzaondbdu5ldpmzjvp_640x640.jpg?v=1661350192&webp=0"
            alt="Katana Hideyoshi Bainha Vermelha"
          />
        </div>
        <div>
          <img
            src="https://katana-univers.fr/wp-content/uploads/2023/08/Katana-Kogan-no-Ken.jpg"
            alt="Katana Ougon no Ken Dourada"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61p2L0hgE2L._AC_UF1000,1000_QL80_.jpg"
            alt="Katana Demon Slayer"
          />
        </div>
      </Carousel>
      <h1>Produtos em Destaque</h1>
      <ListarProdutos produtos={listaDestaque} />
    </div>
  );
}
