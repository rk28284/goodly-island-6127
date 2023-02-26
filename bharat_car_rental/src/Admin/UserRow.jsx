import React from "react";

const UserRow = ({car_title,caritem,caritem2,caritem3,revenuepricediscounted,
  revenuepriceoriginal,revenuedistance, ratingtext, id }) => {
  return <>
  <tr>
    <td>{id+1}</td>
    <td>{car_title}</td>
    <td>{caritem}</td>
    <td>{caritem2}</td>
    <td>{caritem3}</td>
    <td>{revenuepricediscounted}</td>
    <td>{revenuepriceoriginal}</td>
    <td>{revenuedistance}</td>
    <td>{ratingtext}</td>
  </tr>
  </>;
};
export { UserRow };