// Este arquivo define a p�gina raiz da aplica��o Next.js.
// Em `app/page.tsx`, o componente exportado como padr�o � renderizado
// na rota `/`.
// Aqui voc� pode colocar o conte�do inicial exibido ao acessar o site.

// page.tsx (server) -> menu.tsx (server) -> link (client)
import { SpinLoader } from '@/components/spinLoader';
import { Header } from '@/components/header';
import { postRepository } from '@/repositories/post';

export default async function HomePage() {
  const posts = await postRepository.findAll();

  return (
    <div>
       {posts.map(post => {
          return <p key={post.id}>{post.title}</p>
       })}
    </div>
  );
}
