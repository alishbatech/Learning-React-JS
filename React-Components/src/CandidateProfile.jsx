import React from 'react'

export const CandidateProfile=()=> {
    const name="Alishba Shahid"
    const role="Frontend Developer"
    const yearOfExperience=1
  const  isAvailable=true
  return (
    <>
        <h2>{name}</h2>
        <p>{role} with {yearOfExperience} Year of experience.</p>
        <p>Started at{2026-yearOfExperience}.</p>
        <p>Status: {isAvailable ? "Available for hire":"Not available"}</p>
        <p>Contact: {name.toLowerCase().replaceAll(" ",".")}@gmail.com</p>
    </>
  )
}
