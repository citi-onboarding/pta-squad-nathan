// app/register/page.tsx
import Register from "../../components/form";
import Header from "@/components/Header";

export const metadata = {
  title: "Cadastro",
};

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <Register />
    </div>
  );
}
