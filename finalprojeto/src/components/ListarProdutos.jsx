export function ListarProdutos(props) {
  return (
    <ul className="produtos-container">
      {props.produtos.map((produto) => (
        <li key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          <h2>{produto.nome}</h2>
          <p>Material: {produto.material}</p>
          <p>Tamanho: {produto.tamanho}</p>
          <p>Peso: {produto.peso} kg</p>
          <p>Valor: R$ {produto.valor}</p>
          <ul className="produto-itens">
            {produto.itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
