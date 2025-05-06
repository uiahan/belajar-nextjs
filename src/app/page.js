'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Home = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const { data, error } = await supabase.from('todos').select('*')
    if (error) console.error(error)
      else setTodos(data)
  }

  return (
    <div>
      <h1>Welcome to the home page</h1>
      <p>This is the home page of our simple Next.js app</p>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default Home;