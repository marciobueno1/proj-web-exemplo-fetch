export function CardPessoa({ pessoa }) {
  if (!pessoa) return null;
  return (
    <div>
        <h1>{pessoa.name}</h1>
        <h3>Ano de nascimento: {pessoa.birth_year}</h3>
        <h3>Cor do olho: {pessoa.eye_color}</h3>
    </div>
  );
}
