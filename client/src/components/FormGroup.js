import React, {useContext, useState} from 'react'
import Button from './Button'


const FormGroupContext = React.createContext()
FormGroupContext.displayName = 'FormGroupContext'
function FormProvider({children}) {
    const [rememberMeToggle, setToggle] = useState(false)
    function handleChange(e){
        // e.preventDefault()
        setToggle(() => {
            if (rememberMeToggle){
                return false
            } else {
                return true
            }
        })
    }
    const value = {rememberMeToggle, setToggle, handleChange}
    return (
        <FormGroupContext.Provider value={value} children={children}/>
    )
}

function useForm(){
    const context = useContext(FormGroupContext)
    if (context === undefined){
        throw new Error('useForm should be used inside FormGroup context')
    }
    return context
}



export function FormCheckbox(){
    const {rememberMeToggle, handleChange} = useForm()
    console.log(rememberMeToggle)

    return (
        <>
            <label htmlFor='rememberMe'>Remember me</label>
            <input
                type='checkbox'
                checked={rememberMeToggle}
                onChange={handleChange}
                id='rememberMe'
            ></input>
        </>
    )
}

export default function FormGroup(){
    return (
    <FormProvider>
        <form>
            <FormCheckbox />
            <Button  text='Submit'/>
        </form>
    </FormProvider>
    )
}
