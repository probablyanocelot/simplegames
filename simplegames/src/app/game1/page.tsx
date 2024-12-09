import '../style.css'

import Image from 'next/image'
import { DrawCardButton } from './DrawCardButton';
import { cookies } from 'next/headers';
import NavigationButtons from '../nav-buttons';

/**
 * Generates the home page for the tarot card game. Uses cookies to display the user's name.
 *
 * @export
 * @async
 * @returns {unknown}
 */
export default async function Home() {
    const cookieStore = await cookies();
    const username = cookieStore.get('username')?.value || 'Guest';

    return (
        <div className="content bg-scroll bg-cover"
            style={{
                backgroundImage: `url(${"cloth.png"})`,
                backgroundSize: 'fill',
            }}
        >
            <div className="flex flex-col mb-10 shrink-0 items-center" >
                <h1 className="text-9xl mb-3 text-white">Hello, {username}!</h1>
                <h2 className="text-5xl text-white">Do You Dare Test Fate?</h2>
            </div>

            <DrawCardButton />

            <NavigationButtons />

        </div>
    )
}
