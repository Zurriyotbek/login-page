import {useState, useEffect} from "react"


function Login (){

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [userData])
    
    const hendleSubmit = (e) => {
        e.preventDefault()

        const findUser = userData?.find(u => u.userName === inputNameValue && u.password === inputPasswordValue)

        console.log(findUser)
    }



    return(
        <form onSubmit={e => hendleSubmit(e)}>
            <input onChange={e => setInputNameValue(e.target.value)} type="text" placeholder="username" />
            <input onChange={e => setInputPasswordValue(e.target.value)} type="text" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;