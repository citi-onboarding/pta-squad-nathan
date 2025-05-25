// app/register/page.tsx
import Register from '../../components/form';

export const metadata = {
  title: 'Cadastro'
}

export default function RegisterPage() {
  return (
    <div>
      <Register />
    </div>
  );
}
