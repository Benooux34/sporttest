import React from 'react'
import Header from '../../components/Header'

function abdominaux() {
  return (
    <div className="mb-20">
        <Header />

        <div>
          <h1 className="text-2xl m-5">Entrainement - Abdominaux</h1>
        </div>

        <div>
          <h2 className="pl-5 pb-5 text-lg">Exercices de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/l3_BaB7QHCo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/VdxbLHKAego" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/VY4FtHFk34w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div>
          <h2 className="pl-5 py-5 text-lg">Exercices de 10 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/wX8eSe1SZks" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/4o7sr6x_dEg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/BMPps30ZQZQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

    </div>
  )
}

export default abdominaux