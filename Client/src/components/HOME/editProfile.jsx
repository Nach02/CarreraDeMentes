import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateUser } from '../../redux/actions';
import { Link, useHistory } from 'react-router-dom'
import "../STYLES/form.css"


export default function EditProfile() {
    const dispatch = useDispatch()
    const history = useHistory();
    const autenticado = localStorage.getItem('token')

    //////////  ---->    Local states data   <------ //////////////
    const [msg, setMSG] = useState("");
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [avatar, setAvatar] = useState("");

    //////////  ---->    Local states errors   <------ //////////////
    const [errorName, setErrorName] = useState("")
    const [errorMail, setErrorMail] = useState("")


    /////////  ---->    Store states    <------ //////////////
    
    //necesito traer los avatars
    let falseAvatars = ["avatar1","avatar2","avatar3","avatar4"]



    //////////////// ---->    VALIDATIONS    <------ /////////////

    function validation(e) {
        switch (true) {

            case e.target.name === "name":
                if (!/^[a-zA-Z]*$/.test(e.target.value)) {
                    setUsername(e.target.value);
                    setErrorName("No usar espacios, numeros o simbolos")
                
                } else if (e.target.value.length > 16) {
                    setUsername(e.target.value);
                    setErrorName("Máximo 16 carácteres")
                } else {
                    setUsername(e.target.value);
                    setErrorName("")
                }
                break;
            case e.target.name === "mail":
                if (!/\S+@\S+\.\S+/.test(e.target.value)) {
                    setMail(e.target.value);
                    setErrorMail("Se requiere un e-mail válido")
                } else {
                    setMail(e.target.value);
                    setErrorMail("")
                }
                break;
            default:
                console.log("default");
        }
    }

    //////////  ---->    on Submit   <------ //////////////
    const onSubmit = (e) => {
        e.preventDefault()
        // dispatch(updateUser({
        //     name: username,
        //     avatar: avatar,               
        //     mail: mail            
        // }))
        setMSG("Cambios guardados")
        setUsername("")
        setMail("")
        // setTimeout(() => { setMSG("...Going back to Home now") }, 3000);

        // setTimeout(() => { history.push('/home') }, 5000);

    }
    if (autenticado) {
        return (
            <div className='form'>
                <form onSubmit={onSubmit}>
                <h3>Editar perfil</h3>                
                    <div className='formName'>
                        <label>Nombre de Usuario:</label>
                        <>
                            <input className={errorName !== "" ? 'danger' : "inputName"} name="name" type="text" value={username} onChange={(e) => validation(e)} />
                            {errorName ? <p className='error'>{errorName}</p> : null}
                        </>
                    </div>
                    <div className='formMail'>
                        <label>E-Mail:</label>
                        <div>
                            <input className={errorMail !== "" ? 'danger' : "inputEmail"} name="mail" type="text" value={mail} onChange={(e) => validation(e)} />
                            {errorMail ? <p className='error'>{errorMail}</p> : null}
                        </div>
                    </div>
                    <div className='formAvatar'>
                        <label>Avatar</label>
                        <div>
                            <label>Carrousel de avatars</label>
                        </div>
                    </div>
                    <div className='FormSubmit'>
                        <input disabled={errorName || errorMail || !username && !mail && !avatar} className={errorName || errorMail || !username && !mail && !avatar ? "disabled" : "enabled"} type="submit" value="Guardar cambios" />
                        
                    </div>
                    {msg ? <p>{msg}</p> : null}
                </form>
                <Link to="/home"><button className='volver' >← Volver atras </button></Link>
            </div>
        );
    } else {
        history.push('/')
        return <div></div>
    }
}