import {useState} from "react"


function SignUp (){

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')
   

    const hendleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/users', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                userName: inputNameValue,
                password: inputPasswordValue
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }



    return(
        <form onSubmit={e => hendleSubmit(e)}>
            <input onChange={e => setInputNameValue(e.target.value)} type="text" placeholder="username" />
            <input onChange={e => setInputPasswordValue(e.target.value)} type="text" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp;