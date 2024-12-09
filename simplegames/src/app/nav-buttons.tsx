"use client"

import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"



/**
 * Puts navigation bars on the top of the page
 *
 * @export
 * @returns {*}
 */
export function NavigationButtons() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', position: 'fixed', top: '0', width: '100%' }}>
        
        <Button variant={"secondary"} className="bg-white p-4 m-4 cursor-pointer" onClick={() => redirect('/')}>Login</Button>

        <Button variant={"secondary"} className="bg-white p-4 m-4 cursor-pointer" onClick={() => redirect('/game1')}>Tarot</Button>

        <Button variant={"secondary"} className="bg-white p-4 m-4 cursor-pointer" onClick={() => redirect('/game2')}>Dice</Button>

        {/* <button className="bg-white rounded-full p-4 m-4 cursor-pointer" onClick={() => redirect('/')}>Login</button>

        <button className="bg-white rounded-full p-4 m-4 cursor-pointer" onClick={() => redirect('/game1')}>Tarot</button>

        <button className="bg-white rounded-full p-4 m-4 cursor-pointer" onClick={() => redirect('/game2')}>Dice</button> */}

    </div>
  );
};

export default NavigationButtons;