import { getCountryAction } from "@/app/actions/getCountryAction";
import React from "react";

async function getAllCountries() {
  const response = await fetch("http://localhost:3000/api/country", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const data = await response.json();
  return data;
}

export default async function CountryList() {
  const bbsAllData = await getAllCountries();

  console.log(bbsAllData);
  return (
    <ul>
      {bbsAllData.map((country: any, index: number) => (
        <li key={index}>
          {country.name.common},{country.capital},{country.population},
          {country.region},{country.flags.png}
        </li>
      ))}
    </ul>
  );
}
