import React,{useState} from 'react'
import Title from '../components/title'

export default function EsignatureApp() {
    const [name,setName]=useState("Your signature")
    const [date,setDate]=useState("")
    const handleNameChange=(e)=>{
       console.log(e.target.value); 
       setName(e.target.value)
     
       
    }
    const handleDateChange=(e)=>{
        console.log(e.target.value);
        setDate(e.target.value)
    }
    const inputStyle={
        border:'none',
        borderBottom:'2px dotted',
        outline:"none",
        padding:'.35rem 0'
    }
    document.body.style.background="#eee"
  return (
    <div className='container text-center'>
      <Title classes={"title"} text={name}/>
      
      <Title classes={"main-title mb-4"} text={!date ?"DOB":date}/>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus sunt quod eveniet quidem est provident beatae earum neque eligendi a non veniam iure reiciendis illo mollitia voluptatem cumque aperiam hic delectus fugit dolores dicta aspernatur ab. A fuga quidem amet ducimus. Eveniet vel, quo totam exercitationem corporis dignissimos fugiat necessitatibus eaque nulla maiores, ab iure possimus! Commodi recusandae excepturi expedita illo. Saepe libero, amet vitae doloribus debitis temporibus, provident culpa repellendus omnis quasi placeat enim ab magni tempora! Fugit cumque distinctio eum. Placeat magni tenetur temporibus ipsam perspiciatis ex hic totam expedita odit, quas assumenda modi eum earum omnis exercitationem aperiam rem quisquam quia facilis, libero illo consectetur non? Iusto, et perspiciatis repellendus quos similique quis laboriosam culpa possimus minus omnis repellat harum ea numquam amet? Cumque non optio recusandae tempora doloremque fugit id sit omnis quis mollitia exercitationem numquam reiciendis, esse atque obcaecati perferendis impedit porro quas odio explicabo! Minus rerum quidem in eaque laboriosam quia? Quidem sint quos laborum mollitia facilis quo doloremque porro sunt accusamus numquam assumenda quam architecto in nihil obcaecati ratione doloribus, dolore asperiores, provident error eaque vel? Atque saepe doloremque, fugit pariatur, aliquam rem enim nam a reprehenderit obcaecati esse omnis dolorem accusantium magnam exercitationem libero quod eveniet animi tenetur mollitia doloribus quasi unde quis sed? Ad ex dolores laborum distinctio accusantium qui praesentium sed, vero numquam ipsam quam minus reiciendis aperiam natus ratione cumque repudiandae consequatur at reprehenderit non sunt officia quisquam? Porro, eligendi neque velit aliquid doloribus corrupti cupiditate magni quidem suscipit omnis aspernatur sed quia! Nostrum ducimus reiciendis nisi dicta labore! Eaque, architecto quasi asperiores voluptates corrupti placeat consectetur rerum! Deserunt sapiente repellendus labore aliquam maiores mollitia sequi a incidunt nisi. Obcaecati dolorum cum velit molestias impedit porro, provident tenetur! Error pariatur ipsam nobis, expedita rem incidunt quis minus ullam?
    </p>
    <footer className='d-flex' style={{justifyContent:'space-around',position:"relative",top:"40vh"}}>

    <input type='date' value={date} style={inputStyle} onChange={handleDateChange}/>
    <input type='text' value={name} style={inputStyle} onChange={handleNameChange}/>
    </footer>
    
    </div>
  )
}
