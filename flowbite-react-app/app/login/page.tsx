
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function LoginForm() {
  return (
    <main className="h-[calc(100vh-100px)] flex justify-center items-center dark:text-[#5f4a37]">
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" className="dark:text-[#5f4a37] "/>
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" className="dark:text-[#5f4a37]" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="dark:text-[#5f4a37]">Lembrar</Label>
      </div>
      <Button type="submit" >Entrar</Button>
    </form>
    </main>
  );
}
