import React from 'react'
import Header from '../../components/Header'

function bras() {
  return (
    <div className="mb-20">
        <Header />

        <div>
          <h1 className="text-2xl m-5">Entrainement - Bras (Biceps, Triceps, Avant-bras)</h1>
        </div>

        <div>
          <h2 className="pl-5 pb-5 text-lg">Exercice Bras de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/PHTe-6kQAW0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div>
          <h2 className="pl-5 py-5 text-lg">Exercices Triceps de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/VDkwvj2_VIg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/Su-AFZ4pCs0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/KLxlHs6nFgQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div>
          <h2 className="pl-5 py-5 text-lg">Exercices Avant-bras de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/qkrgTkDxw2E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className="px-5 pt-5 flex flex-col space-y-3">
          <h2 className="text-xl font-semibold">Conseils :</h2>
          <span className="font-light">Travailler les bras sans matériel est très compliqué, surtout les biceps. Cette vidéo est parfait pour travailler les bras, si tu es débutant. Cette vidéo va te faire travailler les biceps et les triceps. Tu peux faire cette vidéo 2 ou 3 fois mais si tu veux travailler tout le corps, tu peux le faire qu&apos;une seule fois.</span>
          <span className="font-light">Les exercices Triceps peuvent être difficiles, si tu débutes mais l&apos;important est de finir la vidéo. Si tu finis une vidéo de 5 minutes en 10 minutes, ce n&apos;est pas grave. Les exercices Triceps de 5 minutes peuvent se faire 2 ou 3 fois d&apos;affilés. Si tu travailles tout le corps, une vidéo de 5 minutes suffit. Les exercices Triceps se combinent très bien avec les exercices Pectoraux. Tu peux donc combiner 2 vidéos de 5 minutes pour les Pectoraux et 2 vidéos de 5 minutes pour les Triceps.</span>
        </div>

    </div>
  )
}

export default bras