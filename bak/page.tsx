import Image from "next/image";
import { ProfileForm } from "./my-form"; 
import './style.css'

export default function Home() {
  return (
    <div className="content">
      <ProfileForm />
    </div>
  );
}
