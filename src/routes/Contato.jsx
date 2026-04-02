const Contato = () => {
  return (
    <section>
     
      <h2>Contato</h2>
      <p>Entre em contato com a ForceX.</p>

       
      <form>
       
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />

       
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" name="telefone" />

       
        <label htmlFor="mensagem">Deixe sua mensagem para a ForceX!</label>
        <textarea id="mensagem" name="mensagem"></textarea>

      
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
