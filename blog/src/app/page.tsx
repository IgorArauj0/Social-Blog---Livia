// Este arquivo define a p�gina raiz da aplica��o Next.js.
// Em `app/page.tsx`, o componente exportado como padr�o � renderizado
// na rota `/`.
// Aqui voc� pode colocar o conte�do inicial exibido ao acessar o site.
import { Header } from "@/components/header";

export default function HomePage() {
    console.log('HomePage');
  return (
    <div>
        <Header />
    </div>
  );
}
