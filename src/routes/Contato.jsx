import "../css/contato.css";

const Contato = () => {
  return (
    <section className="contato pagina">
      <div className="container">
        <div className="contato-card">
          <h2 className="info-titulo">
            Entre em <span>Contato</span>
          </h2>

          <p className="contato-texto">Entre em contato com a ForceX.</p>

          <form className="contato-form">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" />

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" />

            <label htmlFor="mensagem">Deixe sua mensagem para a ForceX!</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Escreva sua mensagem"
            ></textarea>

            <button type="submit" className="btn-planos">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;