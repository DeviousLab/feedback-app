import SpinnerAnimation from '../assets/spinner.gif'

function Spinner() {
  return (
    <img src={SpinnerAnimation} 
    alt='Loading Animation' 
    style={{width: '100px', margin: 'auto', display: 'block'}} />
  )
}

export default Spinner
