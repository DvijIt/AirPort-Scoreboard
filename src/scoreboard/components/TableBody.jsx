/* eslint-disable react/prop-types */
import React from 'react'

const TableBody = ({ renderList, searchedFlight }) => {
  if (searchedFlight !== null) {
    if (searchedFlight.length === 0) {
      return <tbody className="error__tr"><tr><td>Flight not found</td></tr></tbody>
    }
    return (
      <tbody className="scoreboard__body">
        {
          searchedFlight.map((item) => (
            <tr key={item.ID} className="scoreboard__body__tr">
              <td>{item.term}</td>
              <td>{item.actual}</td>
              <td>{item['airportToID.city_en']}</td>
              <td>{item.status}</td>
              <td className="scoreboard__body__tr-item">
                <img
                  className="image__logo"
                  src={item.airline.en.logoSmallName}
                  alt="logo"
                />
                {item.codeShareData[0].airline.en.name}
              </td>
              <td>{item.codeShareData[0].codeShare}</td>
            </tr>
          ))
        }
      </tbody>
    )
  }
  return (
    <tbody className="scoreboard__body">
      {
        renderList.map((item) => (
          <tr key={item.ID}>
            <td>{item.term}</td>
            <td>{item.actual}</td>
            <td>{item.city}</td>
            <td>{item.status}</td>
            <td className="scoreboard__body__tr-item">
              <img
                className="image__logo"
                src={item.airline.en.logoSmallName}
                alt="logo"
              />
              {item.codeShareData[0].airline.en.name}
            </td>
            <td>{item.codeShareData[0].codeShare}</td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default TableBody
