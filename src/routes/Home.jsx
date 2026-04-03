import {Link} from 'react-router-dom'
import '../css/home.css'

const planosPopulares = [
  {
    icone: '⚡',
    nome: 'STARTER',
    preco: 'R$ 89',
    mes: '/mês',
    desc: 'Ideal para quem está começando a jornada fitness com suporte básico de treino.',
    beneficios: ['Acesso à musculação', 'App de treinos', 'Avaliação física inicial'],
  },
  {
    icone: '🔥',
    nome: 'PRO',
    preco: 'R$ 149',
    mes: '/mês',
    desc: 'O mais escolhido pelos nossos alunos. Resultados comprovados com acompanhamento.',
    beneficios: ['Tudo do Starter', 'Personal IA semanal', 'Acesso às aulas coletivas', 'Dieta personalizada'],
    highlight: true,
  },
  {
    icone: '👑',
    nome: 'ELITE',
    preco: 'R$ 249',
    mes: '/mês',
    desc: 'Experiência premium com máxima personalização e suporte ilimitado.',
    beneficios: ['Tudo do Pro', 'Personal humano 3x/semana', 'Acesso 24h', 'Suporte prioritário'],
  },
]

const stats = [
  {valor: '2.500+', texto: 'Alunos Ativos'},
  {valor: '98%', texto: 'Satisfação dos Alunos'},
  {valor: '15+', texto: 'Anos de Mercado'},
  {valor: '50+', texto: 'Modalidades'},
]

const Home = () => {
  return (
    <div className='home'>
      {/* banner */}
      <section className='pagina hero'>
        <div className='container hero-container'>
          <div className='badge'>Academia Inteligente</div>
          <h1 className='hero-titulo'>TRANSFORME<br/> SEU <span>CORPO</span><br/> COM INTELIGÊNCIA</h1>
          <p className='subtitulo'>Treinos personalizados por IA, acompanhamento em tempo real e a estrutura mais moderna de São Paulo</p>
          <div className='hero-btn'>
            <Link to="/planos" className='btn-planos'>Conheça nossos planos</Link>
            <Link to="/imc" className='btn-imc'>Calcular IMC</Link>
          </div>
        </div>
        <div className='hero-scroll'>↓ scroll</div>
      </section>

      {/* estatisticas */}
      <section className='stats'>
        <div className=' container grid-stats'>
          {stats.map(s =>(
            <div key={s.texto} className='stat-card'>
              <span className='stats-card-valor'>{s.valor}</span>
              <p className='stats-card-texto'>{s.texto}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* informações/beneficios academia */}
      <section className=' container container-info'>
        <div className='info-text'>
          <h2 className="info-titulo">POR QUE A<br /><span>FORCEX?</span></h2>
          <p>Somos a primeira academia de São Paulo a integrar inteligência artificial no acompanhamento de treinos. Cada aluno recebe um plano 100% personalizado, ajustado em tempo real conforme sua evolução.</p>
          <p>Nossa tecnologia monitora seu desempenho, sugere ajustes e mantém você motivado dia após dia.</p>
          <Link to="/sobre" className='btn-outline' style={{marginTop:'1.5rem', display:'inline-block'}}>Conheça nossa história</Link>
        </div>
        <div className='info-beneficios'>
          {[
            { icone:'🤖', titulo:'IA Personalizada', desc:'Treinos ajustados automaticamente ao seu progresso e objetivos.' },
            {icone:'📊', titulo:'Dashboard de Evolução', desc:'Acompanhe cada métrica da sua jornada fitness em tempo real.'},
            {icone:'🎯', titulo:'Metas Inteligentes', desc:'A IA define metas realistas e te mantém no caminho certo.'},
            {icone:'💪', titulo:'Equipe Especializada', desc:'Profissionais certificados prontos para te apoiar.' },

          ].map(f => (
            <div key={f.titulo} className='card-beneficios'>
              <span className='card-beneficios-icone'>{f.icone}</span>
              <h3 className='card-beneficios-titulo'>{f.titulo}</h3>
              <p className='card-beneficios-desc'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* planos da academia */}
      <section className='planos'>
        <div className='container container-planos'>
          <p className='planos-cabecalho'>PLANOS MAIS POPULARES</p>
          <h2 className="info-titulo">ESCOLHA SEU <span>NÍVEL</span></h2>
          <div className='planos-grid'>
            {planosPopulares.map(p =>(
              <div key={p.nome} className={`card-planos ${p.highlight ? 'card-planos--highlight' : ''}`}>
                {p.highlight && <div className='card-planos-badge'>Mais Escolhido</div>}
                <div className='planos-card-icone'>{p.icone}</div>
                <h3 className='planos-card-nome'>{p.nome}</h3>
                <div className='planos-card-preco'>{p.preco}<span>{p.mes}</span></div>
                <p className='planos-card-desc'>{p.desc}</p>
                <ul className='planos-card-beneficios'>
                  {p.beneficios.map(f => <li key={f}>✓ {f}</li> )}
                </ul>
                <Link to="/planos" className={p.highlight ? 'btn-planos' : 'btn-outline'}>Assinar Agora</Link>
              </div>
            ))}
          </div>
          <div className="planos-cta">
            <Link to="/planos" className="btn-outline">Ver Todos os Planos →</Link>
          </div>  

        </div>
      </section>

    </div>
  )
}

export default Home
