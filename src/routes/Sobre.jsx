
const Sobre = () => {
  return (
    // header
    <div className="sobre-pagina">
      <section className="container-sobre">
        <div className="sobre-hero">
          <p className="cabecalho">Quem Somos</p>
          <h1 className="info-titulo">MAIS QUE UMA<br /><span>ACADEMIA</span></h1>
          <p className="sobre-subtitulo">
            Somos um ecossistema de transformação física e mental, guiado por tecnologia de ponta
            e profissionais apaixonados pelo que fazem.
          </p>
        </div>
        <div className="sobre-hero-visual">
          <div className="sobre-hero-card">
            <div className="sobre-card">
              <span>🏅</span>
              <p>Certificada como</p>
              <strong>ACADEMIA DO ANO 2025</strong>
              <p>pelo Instituto Fitness Brasil</p>
            </div>
          </div>
        </div>
      </section>
      {/* valores da marca */}
      <section className="valores-container">
        {[
          { icone: '🎯', titulo: 'Missão', texto: 'Democratizar o acesso a treinos de alta performance com o poder da inteligência artificial, tornando cada aluno protagonista da sua evolução.' },
          { icone: '🔭', titulo: 'Visão', texto: 'Ser referência nacional em academias inteligentes até 2026, liderando a revolução fitness com tecnologia e humanidade.' },
          { icone: '💚', titulo: 'Valores', texto: 'Comprometimento, inovação constante, respeito ao indivíduo e paixão pelo resultado. Esses princípios guiam cada decisão da ForceX.' },
        ].map(v => (
          <div key={v.titulo} className="valores-card">
            <span>{v.icone}</span>
            <h3>{v.titulo}</h3>
            <p>{v.texto}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Sobre
