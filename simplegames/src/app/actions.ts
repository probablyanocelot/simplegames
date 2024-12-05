'use server'
 
import { cookies } from 'next/headers'
 
export async function create(data) {
  const cookieStore = await cookies()
 
  cookieStore.set('name', 'lee')
  // or
  cookieStore.set('name', 'lee', { secure: true })
  // or
  cookieStore.set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
}