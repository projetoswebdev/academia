import { useState } from 'react'

const planos = [
  {
    icone: '⚡',
    nome: 'STARTER',
    preco: { mensal: 89, anual: 71 },
    mes: '/mês',
    desc: 'Perfeito para quem está dando os primeiros passos na jornada fitness.',
    beneficios: [
      'Acesso à musculação (06h–22h)',
      'App ForceX de treinos',
      'Avaliação física inicial',
      'Acesso ao vestiário premium',
    ],
    notIncluded: ['Aulas coletivas', 'Personal IA', 'Nutricionista', 'Acesso 24h'],
    cta: 'Assinar Starter',
  
  },
  {
    icone: '🔥',
    nome: 'PRO',
    preco: {mensal: 149, anual: 119},
    mes: '/mês',
    desc: 'O plano mais escolhido. Resultados reais com acompanhamento inteligente.',
    beneficios: [
      'Tudo do Starter',
      'Aulas coletivas ilimitadas',
      'Personal IA semanal',
      'Plano alimentar personalizado',
      'Relatório mensal de evolução',
    ],
    notIncluded: ['Personal humano', 'Acesso 24h'],
    cta: 'Assinar Pro',
    highlight: true,
  },
  {
    icone: '👑',
    nome: 'ELITE',
    preco: {mensal: 249, anual: 199},
    mes: '/mês',
    desc: 'Experiência máxima com total suporte humano e inteligência artificial.',
    beneficios: [
      'Tudo do Pro',
      'Personal humano 3x/semana',
      'Acesso 24 horas',
      'Consultas com nutricionista',
      'Acompanhamento de impedância',
      'Suporte prioritário via WhatsApp',
    ],
    notIncluded: [],
    cta: 'Assinar Elite',
  },
]

const Planos = () => {
  const [anual, setAnual] = useState(false)

  return (
    <div className="pagina-plano">
      <div className="container-plano">
        <p className="plano-cabecalho">Nossos Planos</p>
        <h1 className="info-titulo">INVISTA NO SEU<br/><span>MELHOR EU</span></h1>
        <p className="planos-subtitulo">
          Escolha o plano que se encaixa no seu ritmo. Todos incluem acesso ao app ForceX e avaliação física.
        </p>
      

        {/* toggle */}
        <div className="plano-toggle">
          <span className={!anual ? 'active' : ''}>Mensal</span>
          <button className={`toggle-btn ${anual ? 'toggle-btn--on' : ''}`}
              onClick={() => setAnual(v => !v)}
              aria-label="Alternar entre mensal e anual">
          </button>
          <span className={anual ? 'active' : ''}>
            Anual <em>-20%</em>
          </span>
        </div>
        {/* grade de planos */}
        <div className='plano-grid'>
          {planos.map(p =>(
            <div key={p.nome} className={`plano-card ${p.highlight ? 'plano-card--highlight' : ''}`}>
              {p.highlight && <div className="plano-card__badge">⭐ Mais Popular</div>}
              <div className="plano-card-header">
                <span className="plano-card-icon">{p.icone}</span>
                <h2 className="plano-card-nome">{p.nome}</h2>
              </div>
              <div className='plano-card-preco'>
                <span className="plano-card__amount">
                  R$ {anual ? p.preco.anual : p.preco.mensal}
                </span>
                <span className="plano-card-mes">/mês</span>
              </div>
              {anual && (
                <p className="plano-card-anual-note">Cobrado anualmente - R$ {p.preco.anual*12}/ano</p>
              )}

              <p className='plano-card-desc'>{p.desc}</p>

              <ul className='plano-card-beneficios'> 
                {p.beneficios.map(f => (
                  <li key={f} className="plano-card-beneficio plano-card-beneficio--incluido">
                    <span>✓</span>{f}
                  </li>
                ))}
                {p.notIncluded.map(f => (
                  <li key={f} className="plano-card-beneficio plano-card-beneficio--nao-incluido">
                    <span>✗</span>{f}
                  </li>
                ))}
                {p.notIncluded.map(f => (
                  <li key={f} className="plano-card-beneficio plano-card-beneficio--nao-incluido">
                    <span>✗</span>{f}
                  </li>
                ))}
              </ul>

              <button className={p.highlight ? 'btn-planos' : 'btn-outline'} style={{width: '100%', marginTop: 'auto'}}>{p.cta}
              </button>
            </div>
          ))}
        </div>
        <div className='planos-garantia'>
          <span>🛡️</span>
          <p><strong>Garantia de 7 dias.</strong> Não gostou? Devolvemos seu dinheiro sem perguntas.</p>
        </div>
      </div>
    </div>
  )
}

export default Planos
