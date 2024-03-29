import './FormComponent.css'
import { useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

const FormComponent = (props)=>{
    // console.log("Render Form component")

    const [title,setTitle]  = useState('')
    const [amount,setAmount]  = useState(0)
    const [fromValid,setFromValid]  = useState(false)

    const inputTitle =(event)=>{
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    const inputAmount =(event)=>{
        console.log(event.target.value)
        setAmount(event.target.value)
    }

    const saveItem =(event)=>{
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        console.log("Call useEffect")
        const checkData = title.trim().length > 0 && amount !== 0
        setFromValid(checkData)
        // if(checkData){
        //     setFromValid(true)
        // }

    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!fromValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent