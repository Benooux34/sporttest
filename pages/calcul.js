import React, { useState } from 'react'
import Header from '../components/Header'

function Calcul() {

  const [taille, setTaille] = useState('')
  const [poids, setPoids] = useState('')
  const [age, setAge] = useState('')
  const [multi, setMulti] = useState('')
  const [result, setResult] = useState(false)

  return (
    <div>
        <Header />  

        <div className="p-5">
            <h1 className="text-2xl font-light">Calcul ton IMC et ton besoin calorique par jour</h1>
        </div>

        <div className="py-1 px-5 flex flex-col space-y-2">
            <h2 className="text-xl font-semibold mb-1">Comment calculer son IMC et son besoin calorique ?</h2>
            <span className="text-sm font-light">Il se calcule simplement en divisant le poids (en kg) par le carré de la taille (m). Un IMC normal se situe entre 18,5 et 25. Pour connaître votre IMC, pas besoin de sortir votre calculette, il vous suffit de compléter les champs ci-dessous.</span>
            <span className="text-sm font-light">Pour savoir combien de calories vous avez besoin par jour, rien de plus simple. Il suffit de multiplier votre métabolisme de base (MB) par votre niveau d&apos;activité physique (NAP). Vous obtiendrez alors un résultat en kilocalories qui correspond à votre apport journalier de base, soit BEJ = MB x NAP.</span>
        </div>

        <div className="p-5 space-y-4 flex flex-col">
            <input className="border border-blue-400 border-2 p-1 w-[95%]" id="cm" type="text" placeholder='Quelle âge as-tu ?' onChange={event => setAge(event.target.value)} />
            <input className="border border-blue-400 border-2 p-1 w-[95%]" id="cm" type="text" placeholder='Votre taille en cm' onChange={event => setTaille(event.target.value)} />
            <input className="border border-blue-400 border-2 p-1 w-[95%]" id="kg" type="text" placeholder='Votre poids en kg' onChange={event => setPoids(event.target.value)} />
            <h3 className="font-light">Tu fais combien d&apos;heures de sport par semaine ?</h3>
            <div className="flex justify-between items-center mx-5">
                <label className="flex flex-col text-[13px] font-light"><input type="radio" name="radio" onChange={() => setMulti(1.15)} />- de 1h</label>
                <label className="flex flex-col text-[13px] font-light"><input type="radio" name="radio" onChange={() => setMulti(1.25)} />1 à 3h</label>
                <label className="flex flex-col text-[13px] font-light"><input type="radio" name="radio" onChange={() => setMulti(1.40)} />4 à 6h</label>
                <label className="flex flex-col text-[13px] font-light"><input type="radio" name="radio" onChange={() => setMulti(1.55)} />+ de 6h</label>
            </div>
            <button onClick={() => setResult(true)} className="bg-blue-400 text-white rounded-lg px-3 py-1">Calculez !</button>
        </div>

        <div className={result ? "Result" : "PasResult"}>
            <span className="text-xl">Ton IMC est de {Math.round((parseInt(poids) / (parseInt(taille) * parseInt(taille))) * 10000)} et tu as besoin de {Math.round( (10 * parseInt(poids) + 6.25 * parseInt(taille) - 5 * parseInt(age) + 5) * multi )} calories par jour le sang !</span>
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

        <div className="p-5">
            <h3 className="text-lg font-semibold">Plus d&apos;informations sur l&apos;IMC</h3>
            <span className="text-sm font-light">L&apos;indice de masse corporelle (IMC) permet d&apos;évaluer rapidement votre corpulence simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez. L&apos;indice de masse corporelle (IMC) est le seul indice validé par l&apos;Organisation mondiale de la santé pour évaluer la corpulence d’un individu et donc les éventuels risques pour la santé. L&apos;IMC permet de déterminer si l&apos;on est situation de maigreur, de surpoids ou d&apos;obésité par exemple. En anglais on parle de BMI pour Body Mass Index.</span>
        </div>
        
        <div className="pl-5 mb-20">
            <h3 className="text-lg font-semibold">Plus d&apos;informations sur les calories</h3>
            <span className="text-sm font-light">Chaque jour, vous dépensez de l&apos;énergie pour réfléchir, marcher, digérer... La quantité de calories consommée dépend de plusieurs facteurs : âge, poids, activité physique... Or le carburant nécessaire à votre corps est apporté par votre alimentation. Il est donc essentiel de connaître vos besoins caloriques quotidiens, pour adapter vos apports.</span>
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

export default Calcul