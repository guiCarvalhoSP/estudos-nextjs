import React from "react";

import styles from "../../styles/Todos.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();

  return {
    props: { todos },
  };
}

function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h4> {todo.title}</h4>
            <p>Completo: {todo.completed ? 'Sim' : 'Não' }</p>
            <p><Link href={`/todos/${todo.id}`}>Ver detalhes</Link></p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
