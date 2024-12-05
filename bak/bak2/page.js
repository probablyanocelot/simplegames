import Image from "next/image";
import { FormEvent } from 'react'
import "./style.css"

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }



  return (
    <div className="content">
      <h1>Simple Games</h1>
      <Image src="/images/hero.jpg" alt="hero" width={300} height={200} />
      <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
      
    </div>
  );
}