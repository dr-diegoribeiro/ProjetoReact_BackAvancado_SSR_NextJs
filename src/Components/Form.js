
import Styles from './Form.module.css'

function Form() {

    return (

  

        <div className={Styles.background}>
<p>.</p>
    <div>
        <h2 className={Styles.h2}>Sejamos como a águia, que voa imperante e não desiste de seus objetivos!
        Que de longe sabe onde quer chegar, foca no alvo específico com tenacidade e certeza do que quer. Voa rapidamente <br></br>   
        até sua presa e investe toda sua energia naquela caçada, como se fosse a última de sua vida.</h2>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

</div>

<form >
    <h2 className={Styles.h2}>Deixe seu e-mail para receber reflexões: </h2>
        <label for="nome" className={Styles.label}> Nome :  </label>
        <input type="text" id="nome" name="nome" placeholder="digite seu nome..." className={Styles.input}/>
        <br></br>
        <label for="email" className={Styles.label}>E-mail: </label>
        <input type="text" id="fname" name="email" placeholder="email.." className={Styles.input}/>
  
        <button type="submit" value="Submit" className={Styles.button}> enviar </button>
    </form>

    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>

</div>

    );
  }
   export default Form