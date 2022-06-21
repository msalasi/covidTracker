import React from 'react'

function UserRow({pais}) {
  return (
    <table>
                <tbody>
                <tr>
                    <th>País:</th>
                    <th>Total de casos:</th>
                    <th>Casos diarios:</th>
                    <th>Ultimos fallecidos:</th>
                </tr>
                <tr>
                    <td>{pais.Country}</td>
                    <td>{pais.TotalConfirmed}</td>
                    <td>{pais.NewConfirmed}</td>
                    <td>{pais.NewDeaths}</td>
                </tr>
                </tbody>
    </table>
  )
}

export default UserRow