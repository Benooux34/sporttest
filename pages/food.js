import React from 'react'
import Image from "next/image"
import Header from '../components/Header'

function food() {
  return (
    <div>
        <Header />

        <div className="px-5 py-3">
          <h1 className="font-light text-2xl">La Nutrition</h1>
        </div>

        <table className="table-auto m-2 border">
          <thead className="border">
            <tr className="text-[12px] text-left border">
              <th className="border p-1">Aliments</th>
              <th className="border p-1">Protéines (pour 100g)</th>
              <th className="border p-1">Calories (pour 100g)</th>
            </tr>
          </thead>
        <tbody className="border">
          <tr className="border">
            <td className="border p-2">Riz</td>
            <td className="border p-2">7 g</td>
            <td className="border p-2">330 g</td>
          </tr>
          <tr className="border">
            <td className="border p-2">Poulet</td>
            <td className="border p-2">17 - 30 g</td>
            <td className="border p-2">173 - 220 g</td>
          </tr>
          <tr className="border">
            <td className="border p-2">Poisson</td>
            <td className="border p-2">16 - 30 g</td>
            <td className="border p-2">78 - 180 g</td>
          </tr>
          <tr className="border">
            <td className="border p-2">Pâte</td>
            <td className="border p-2">5 g</td>
            <td className="border p-2">130 g</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default food