import { useRouteError } from "react-router-dom"


const Errorpage = () => {
    const error=useRouteError()
console.log(error)
  return (
    <div>
      <h1>Oops,Some error is Occurred</h1>
      <p> {error.message || error.data}</p>
    </div>
  )
}

export default Errorpage
