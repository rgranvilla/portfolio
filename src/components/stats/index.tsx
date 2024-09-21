export function Stats() {
  return (
    <div className="mb-10 mt-24 flex items-center justify-around border-y border-slate-600 py-8 hover:border-slate-400">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-6xl text-purple-500">4+</h3>
        <p className="text-2xl text-slate-400">Anos de experiência</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-6xl text-purple-500">13+</h3>
        <p className="text-2xl text-slate-400">Projetos concluídos</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-6xl text-purple-500">5000+</h3>
        <p className="text-2xl text-slate-400">Horas de desenvolvimento</p>
      </div>
    </div>
  )
}

// todo: divide this component into smaller components: StatsItem, StatsList, Stats
