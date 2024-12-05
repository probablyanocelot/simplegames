import '../style.css'
import { TarotCard } from "./tarot";
import { cookies } from 'next/headers';

export default async function Home() {
    const cookieStore = await cookies();
    const username = cookieStore.get('username')?.value || 'Guest';

    return (
        <div className="content">
            <h1 className="text-3xl mb-3">Hello, {username}!</h1>
            <h2 className="mb-10">Do You Dare Test Fate?</h2>
            <div className="cards">
                <TarotCard />
                <TarotCard />
                <TarotCard />
                <TarotCard />
            </div>
        </div>
    )
}
