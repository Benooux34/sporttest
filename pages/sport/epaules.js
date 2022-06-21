import React from 'react'
import Header from '../../components/Header'

function epaules() {
  return (
    <div className="mb-20">
        <Header />

        <div>
          <h1 className="text-2xl m-5">Entrainement - Épaules</h1>
        </div>

        <div>
          <h2 className="pl-5 pb-5 text-lg">Exercices de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/1noV0QbxgIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

    </div>
  )
}

export default epaules