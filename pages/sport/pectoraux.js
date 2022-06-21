import React from 'react'
import Header from '../../components/Header'

function pectoraux() {
  return (
    <div className="mb-20">
        <Header />

        <div>
          <h1 className="text-2xl m-5">Entrainement - Pectoraux</h1>
        </div>

        <div>
          <h2 className="pl-5 pb-5 text-lg">Exercices de 5 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/EAzT-DJxZC0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/c7JisdFieeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/XQSvE-8Kgp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div>
          <h2 className="pl-5 py-5 text-lg">Exercices de 8/10 minutes</h2>
          <div className="pl-5 space-y-5">
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/79T9769v2NY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/YFGTEr3i6RE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-[90%]" src="https://www.youtube.com/embed/QLoSIIvV5XA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
    </div>
  )
}

export default pectoraux