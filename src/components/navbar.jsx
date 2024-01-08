import React from 'react'

function Navbar() {
  return (
    <nav>
        <ul>
            <a href="/"> 
                Inicio
            </a>
            <a href="/tasks/new">
                Crear tarea
            </a>
        </ul>
    </nav>
  )
}

export default Navbar