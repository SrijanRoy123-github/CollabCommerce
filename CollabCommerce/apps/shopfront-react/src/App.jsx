
import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

// In DEMO mode, we don't have a real GraphQL backend. We still instantiate a client so
// the tech is "used". In production, point 'uri' to your gateway URL.
const client = new ApolloClient({ uri: '/graphql', cache: new InMemoryCache() })

const formatPrice = (p) => '₹' + (p.toFixed(2))

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')||'[]'))

  useEffect(() => {
    fetch('../../data/products.json').then(r => r.json()).then(setProducts)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const add = (p) => setCart(prev => {
    const found = prev.find(i => i.id === p.id)
    if(found) return prev.map(i => i.id===p.id? {...i, qty: i.qty+1}:i)
    return [...prev, {id:p.id, name:p.name, price:p.price, qty:1}]
  })

  const total = cart.reduce((s,i)=>s+i.price*i.qty, 0)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🛍️ CollabCommerce — Shopfront (React + Tailwind)</h1>
        <nav className="space-x-3 text-sm">
          <a className="underline" href="/CollabCommerce/">Home</a>
          <a className="underline" href="/CollabCommerce/console/">OpsConsole</a>
          <a className="underline" href="/CollabCommerce/community/">Community</a>
        </nav>

      </header>

      <section className="grid md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-slate-600">Stock: {p.stock}</p>
            <p className="text-lg mt-2">{formatPrice(p.price)}</p>
            <button className="mt-3 px-3 py-2 rounded-xl bg-slate-900 text-white" onClick={()=>add(p)}>Add to cart</button>
          </div>
        ))}
      </section>

      <section className="mt-10 bg-white rounded-2xl shadow p-4">
        <h2 className="font-semibold mb-2">Cart</h2>
        {cart.length===0? <p className="text-slate-600">Your cart is empty.</p> : (
          <ul className="space-y-1">
            {cart.map(i => <li key={i.id} className="flex justify-between"><span>{i.name} × {i.qty}</span><span>{formatPrice(i.price*i.qty)}</span></li>)}
          </ul>
        )}
        <div className="mt-3 flex justify-between font-semibold">
          <span>Total</span><span>{formatPrice(total)}</span>
        </div>
        <button className="mt-3 px-3 py-2 rounded-xl bg-green-600 text-white">Checkout (Stripe - mocked)</button>
      </section>
    </div>
  )
}
