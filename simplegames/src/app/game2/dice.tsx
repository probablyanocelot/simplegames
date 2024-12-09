"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

/**
 * Component to roll a dice and display the results.
 *
 * @export
 * @returns {*}
 */
export function DiceRoller() {
  const [diceResults, setDiceResults] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);


  const rollDice = () => {
    const roll = () => Math.floor(Math.random() * 6) + 1;
    const newResults = [roll(), roll(), roll(), roll()]
    const newTotal = newResults.reduce((acc, curr) => acc + curr, 0);

    setTotal(newTotal);
    setDiceResults(newResults);
  };

  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <Button variant={"secondary"} onClick={rollDice}>Roll Dice</Button>
            <div className="flex mt-4">
                {diceResults.map((result, index) => (
                    <div key={index} className="dice">
                        <img src={`/dice ${result}.png`} alt={`Dice ${result}`} width={50} height={50} />
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center mt-5">
            <h2 className="text-2xl text-white bold"> {total} </h2>
        </div>
    </div>
  );
}

