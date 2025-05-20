// src/pages/Dashboard.jsx
import React from 'react'
import DTEStats from '../components/DTEStats'
import MunicipioHeatmap from '../components/MunicipioHeatmap'
import DTETimeline from '../components/DTETimeline'
import DTETable from '../components/DTETable'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Aquí tu layout: Navbar, cards, mapas, gráficos, tabla */}
      <h1 className="text-3xl font-bold mb-6">Mi Dashboard DGII</h1>
      <DTEStats />
      <div className="grid lg:grid-cols-2 gap-6 my-6">
        <MunicipioHeatmap />
        <DTETimeline />
      </div>
      <DTETable />
    </div>
  )
}
