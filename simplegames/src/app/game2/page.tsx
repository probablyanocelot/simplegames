import '../style.css'

import Image from 'next/image'
import { cookies } from 'next/headers';
import NavigationButtons from '../nav-buttons';
import { DiceRoller } from './dice';

export default async function Home() {
    const cookieStore = await cookies();
    const username = cookieStore.get('username')?.value || 'Guest';

    return (
        <div className="content bg-scroll bg-cover"
            style={{
                backgroundImage: `url(${"poker-table.png"})`,
                backgroundSize: 'fill',
            }}
        >
            <div className="flex flex-col mb-10 pb-10 items-center content-center" >
                <h1 className="text-9xl mb-3 text-white">Hello, {username}!</h1>
                <h2 className="text-5xl text-white">Care To Roll The Dice?</h2>
            </div>

            <DiceRoller />
            <NavigationButtons />

        </div>
    )
}
