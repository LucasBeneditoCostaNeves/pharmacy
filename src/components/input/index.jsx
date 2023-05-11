import React from 'react'
import { DivStyled } from './styled'

export const Input = ({label,type,placeholder,register,msgerror}) => {

  return (
    <DivStyled>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register} />
        <span>{msgerror}</span>
    </DivStyled>
  )
}