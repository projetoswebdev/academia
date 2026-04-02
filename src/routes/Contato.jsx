const Contato = () => {
  return (
    <section>
     
      <h2>Contato</h2>
      <p>Entre em contato com a ForceX.</p>

       
      <form>
        {/* Seção nome */}
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />

        {/* Seção email */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        {/* Seção telefone */}
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" name="telefone" />

        {/* Seção mensagem */}
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem"></textarea>

      
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
