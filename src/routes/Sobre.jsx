
const timeline = [
  { ano: '2009', 
    evento: 'Fundação da ForceX com foco em musculação e resultado.' },
  { ano: '2015', 
    evento: 'Expansão para 3 unidades e lançamento das aulas funcionais.' },
  { ano: '2019', 
    evento: 'Início da parceria com startups de tecnologia fitness.' },
  { ano: '2022', 
    evento: 'Integração do primeiro sistema de IA para treinos personalizados.' },
  { ano: '2024', 
    evento: 'ForceX torna-se a academia mais inteligente de São Paulo.' },
]

const time = [
  { nome: 'Carlos Mendes', 
    papel: 'Head de Treinamento', 
    icone: '🏋️' },
  { nome: 'Ana Lúcia Torres', 
    papel: 'Especialista em Nutrição', 
    icone: '🥗' },
  { nome: 'Rafael Souza', 
    papel: 'Engenheiro de IA', 
    icone: '🤖' },
  { nome: 'Juliana Costa', 
    papel: 'Coordenadora de Bem-estar', 
    icone: '🧘' },
]

const Sobre = () => {
  return (
    // header
    <div className="sobre pagina">
      <section className=" container container-sobre">
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

      {/* timeline */}
      <section className="timeline-secao">
        <div className="container">
          <p className="cabecalho">Nossa Trajetória</p>
          <h2 className="info-titulo">HISTÓRIA QUE<br /><span>INSPIRA</span></h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.ano} className={`timeline-item ${i % 2 === 0 ? 'timeline_item--left' : 'timeline_item--right'}`}>
                <div className="timeline-content">
                  <span className="timeline-ano">{t.ano}</span>
                  <p>{t.evento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* apresentação do time */}
      <section className="time-container">
        <p className="cabecalho">Time ForceX</p>
        <h2 className="info-titulo">QUEM FAZ A<br /><span>DIFERENÇA</span></h2>
        <div className="time-grid">
          {time.map(m => (
            <div key={m.nome} className="time-card">
              <div className="time-card_avatar">{m.icone}</div>
              <h4>{m.nome}</h4>
              <p>{m.papel}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sobre
