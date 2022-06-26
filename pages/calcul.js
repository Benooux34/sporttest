import React, { useState } from 'react'
import Header from '../components/Header'

function calcul() {

  const [taille, setTaille] = useState('')
  const [poids, setPoids] = useState('')
  const [result, setResult] = useState(false)


  return (
    <div>
        <Header />  

        <div className="p-5">
            <h1 className="text-2xl font-light">Calcul ton IMC</h1>
        </div>

        <div className="py-1 px-5">
            <h2 className="text-xl font-semibold">Comment calculer son IMC ?</h2>
            <span className="text-sm font-light">Il se calcule simplement en divisant le poids (en kg) par le carré de la taille (m). Un IMC normal se situe entre 18,5 et 25. Pour connaître votre IMC, pas besoin de sortir votre calculette, il vous suffit de compléter les champs ci-dessous.</span>
        </div>

        <div className="p-5 space-y-4">
            <input className="border border-blue-400 border-2 p-1 w-[95%]" id="cm" type="text" placeholder='Votre taille en cm' onChange={event => setTaille(event.target.value)} />
            <input className="border border-blue-400 border-2 p-1 w-[95%]" id="kg" type="text" placeholder='Votre poids en kg' onChange={event => setPoids(event.target.value)} />
            <button onClick={() => setResult(true)}id="btn" className="bg-blue-400 text-white rounded-lg px-3 py-1">Calculez !</button>
        </div>

        <div className={result ? "Result" : "PasResult"}>
            <span className="text-xl">Ton IMC est de {Math.round((parseInt(poids) / (parseInt(taille) * parseInt(taille))) * 10000)} le sang !</span>
        </div>

        <div className="px-5 py-2 space-y-1">
            <div className="flex items-center space-x-2">
                <span>Moins de 18 :</span>
                <span className="text-sm font-light">Insuffisante pondérale (maigreur)</span>
            </div>
            <div className="flex items-center space-x-2">
                <span>Entre 18 et 25 :</span>
                <span className="text-sm font-light">Corpulence normale</span>
            </div>
            <div className="flex items-center space-x-2">
                <span>Entre 25 et 30 :</span>
                <span className="text-sm font-light">Surpoids</span>
            </div>
            <div className="flex items-center space-x-2">
                <span>Entre 30 et 35 :</span>
                <span className="text-sm font-light">Obésité modérée</span>
            </div>
            <div className="flex items-center space-x-2">
                <span>Entre 35 à 40</span>
                <span className="text-sm font-light">Obésité sévère</span>
            </div>
            <div className="flex items-center space-x-2">
                <span>Plus de 40 :</span>
                <span className="text-sm font-light">Obésité morbide ou massive</span>
            </div>
        </div>

        <div className="p-5 mb-10">
            <span className="text-sm font-light">L&apos;indice de masse corporelle (IMC) permet d&apos;évaluer rapidement votre corpulence simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez. L&apos;indice de masse corporelle (IMC) est le seul indice validé par l&apos;Organisation mondiale de la santé pour évaluer la corpulence d’un individu et donc les éventuels risques pour la santé. L&apos;IMC permet de déterminer si l&apos;on est situation de maigreur, de surpoids ou d&apos;obésité par exemple. En anglais on parle de BMI pour Body Mass Index.</span>
        </div>

        <style>
            {`
                .PasResult {
                    display: none;
                }
                .Result {
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    color: #60a5fa;
                }
            `}
        </style>

    </div>
  )
}

export default calcul