import { Inter } from "next/font/google";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-8 p-24 ${inter.className}`}
    >
      <PageHead title="home" />
      <Button color="primary">Primary Button</Button>
    </main>
  );
}
