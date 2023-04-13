import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

function Comment() {

  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>voltar</Link>
      <h2>Comentario {commentId}</h2>
      <h4>Todo {todoId}</h4>

    </>
  )
}

export default Comment