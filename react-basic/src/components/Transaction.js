import Item from "./Item";
import './Transaction.css'
import {v4 as uuidv4} from 'uuid';

const Transaction =()=> {
    //Array Data
    const data =[
        {title:"ค่ารักษาพยาบาล" ,amount:-2000},
        {title:"ค่าน้ำมัน" ,amount:-2000},
        {title:"ค่าเช่าบ้าน" ,amount:-2000},
        {title:"เงินเดือน" ,amount:70000},
        {title:"รายได้พิเศษ" ,amount:2000}
    ]

    return(
      <ul className="item-list">
            {/* Array Map */}
            {data.map((element)=>{
                return <Item title={element.title} amount={element.amount} key = {uuidv4()}/>
            })}

          {/* <Item title={data[0].title} amount={data[0].amount}/>
          <Item title={data[1].title} amount={data[1].amount}/>
          <Item title={data[2].title} amount={data[2].amount}/>
          <Item title={data[3].title} amount={data[3].amount}/>
          <Item title={data[4].title} amount={data[4].amount}/> */}
      </ul>
    )
}

export default Transaction