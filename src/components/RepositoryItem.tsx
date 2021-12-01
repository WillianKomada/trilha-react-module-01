interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
  // batata?: {
  //   name: string;
  //   amount: string;
  // };
}

// Devo utilizar props quando não quero especificar um elemento do interface

/* 
  Example: props.repository.name                  || repository.name
           objetoCompleto.específico.propriedade
           props.batata?.name
           objetoCompleto.específico.propriedade   || batata?.name

*/

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
