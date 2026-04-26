export default function HomePage() {
  return (
    <div className="text-center py-5">
      {/* Titolo principale */}
      <h1 className="display-5 fw-bold mb-3">
        Hai un problema legale? 🎯
      </h1>
      
      {/* Sottotitolo */}
      <p className="lead text-muted mb-4">
        Buonuomo & Associates: soluzioni creative, risultati concreti.
      </p>
      
      {/* Bottone CTA (Call To Action) */}
      <a href="#contact" className="btn btn-warning btn-lg px-4">
        Parlane ora →
      </a>
      
      {/* Sezione servizi (bozza) */}
      <div className="row g-4 mt-5 pt-4 border-top">
        <div className="col-md-4">
          <h5>📋 Diritto Civile</h5>
          <p className="text-muted small">Contratti, dispute, risarcimenti</p>
        </div>
        <div className="col-md-4">
          <h5>⚖️ Diritto Penale</h5>
          <p className="text-muted small">Difesa legale, consulenze</p>
        </div>
        <div className="col-md-4">
          <h5>💼 Diritto Commerciale</h5>
          <p className="text-muted small">Imprese, startup, burocrazia</p>
        </div>
      </div>
    </div>
  )
}