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

        <div className="px-5 pt-5 flex flex-col space-y-3">
          <h2 className="text-xl font-semibold">Conseils :</h2>
          <span className="font-light">! Important ! Tu ne dois pas faire des exercices d&apos;abdominaux juste apr??s avoir mang??. Tu dois attendre 45 minutes ou 1 heure apr??s ton repas. Les exercices de 5 minutes sont parfaits pour d??buter. Tu peux faire 2 ou 3 vid??os soit 10/15 minutes d&apos;exercices pour les abdominaux. Si tu travailles tout le corps, 1 vid??o de 5 minutes suffit.</span>
          <span className="font-light">Je te conseille de faire 1 vid??o de 10 minutes m??me si tu es d??butant. Les exercices pour travailler les abdominaux ne sont pas tr??s compliqu??s. Si tu travailles tout le corps ou juste les abdominaux, 1 vid??o de 10 minutes est largement suffisant.</span>
        </div>

    </div>
  )
}

export default abdominaux