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

        <div className="px-5 pt-5 flex flex-col space-y-3">
          <h2 className="text-xl font-semibold">Conseils :</h2>
          <span className="font-light">Les exercices de 5 minutes sont parfaits lorsque tu commences. Si tu n&apos;arrives pas ?? faire des pompes &ldquo;classiques&ldquo;, tu peux faire des pompes sur les genoux. Si tu choisis de faire des exercices de 5 minutes et que tu souhaites travailler uniquement les pectoraux, je te conseille de faire 3 fois la m??me vid??o ou de faire 3 vid??os diff??rentes. 15 minutes de pectoraux est largement suffisant, car ce muscle est tr??s vite congestionn??. En revanche, si tu d??cides de travailler tout le corps, 1 vid??o de 5 minutes suffit.</span>
          <span className="font-light">Les exercices de 8/10 minutes sont id??ales, si tu arrives ?? finir une vid??o de 5 minutes sans faire de pompes sur les genoux. Tu peux faire 2 vid??os soit 20 minutes. Si tu n&apos;arrives pas ?? finir une vid??o de 5 minutes sans faire de pompes sur les genoux, je te conseille de faire 1 seule vid??o de 8 ou 10 minutes. Tu peux combiner 1 vid??o de 10 minutes sur les pectoraux et 2 ou 3 vid??os de 5 minutes sur les triceps. Si tu te lances dans une vid??o de 10 minutes, tu dois absolument la finir. Tu peux mettre la vid??o en pause ou prendre plus de temps entre les exercices mais tu dois finir la vid??o. Si malgr?? ??a, tu n&apos;arrives pas ?? finir une vid??o de 10 minutes, tu dois retourner sur les vid??os de 5 minutes.</span>
        </div>
    </div>
  )
}

export default pectoraux