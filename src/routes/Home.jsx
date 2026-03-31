import {Link} from 'react-router-dom'

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
      <section className='hero'>
        <div className='hero-container'>
          <div className='badge'>Academia Inteligente</div>
          <h1>TRANSFORME<br/> SEU <span>CORPO</span><br/> COM INTELIGÊNCIA</h1>
          <p className='subtitulo'>Treinos personalizados por IA, acompanhamento em tempo real e a estrutura mais moderna de São Paulo</p>
          <div className='hero-btn'>
            <Link to="/planos" className='btn-planos'>Conheça nossos planos</Link>
            <Link to="/contato" className='btn-outline'>Calcular IMC</Link>
          </div>
        </div>
        <div className='hero-scroll'>↓ scroll</div>
      </section>

      {/* estatisticas */}
      <section className='stats'>
        <div className='grid-stats'>
          {stats.map(s =>(
            <div key={s.texto} className='stat-card'>
              <span className='stats-card-valor'>{s.valor}</span>
              <p className='stats-card-texto'>{s.texto}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* informações/beneficios academia */}
      <section className='container-info'>
        <div className='info-text'>
          <div className='info-titulo'>POR QUE A </div>
          <div><span>FORCEX?</span></div>
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

    </div>
  )
}

export default Home
