import data from "./Questions"


const Main = () =>{
  return(
    data.map((row,index) =>{
      return(
        <h1>{row}</h1>
      )
    })
  )
}

export default Main