// import React from 'react'


interface Props{}

const LayoutDesignPage:React.FC<React.PropsWithChildren<Props>> = ({children})=>{
  return(
    <>
    <div>Layout design</div>
    <div>{children}</div>
    </>
  )
}

export default LayoutDesignPage

