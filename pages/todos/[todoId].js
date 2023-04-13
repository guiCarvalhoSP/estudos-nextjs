import React from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);

  const todo = await data.json();

  return {
    props: { todo }
  }
}

export async function getStaticPaths() {

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

function Todo({ todo }) {

  return (
    <>
      <Link href="/todos">voltar</Link>
      <h1>Tarefa {todo.id}</h1>

      <h4>Comentarios:</h4>
      <p>Lorem ipsum dolor sit amet... <Link href={`/todos/${todo.id}/comments/1` }>Detalhes</Link></p>

      <p>Lorem ipsum dolor sit amet consectetur.... <Link href={`/todos/${todo.id}/comments/2` }>Detalhes</Link></p>

      <p>Lorem ipsum dolor sit.... <Link href={`/todos/${todo.id}/comments/3` }>Detalhes</Link></p>

    </>
  )
}

export default Todo