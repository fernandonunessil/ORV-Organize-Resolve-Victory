"use client";
import React, { useState } from "react";
// Components
import Footer from "@/components/Footer";
import Image from "next/image";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  return (
    <div className="">
      <section className="h-screen">
        <div className="flex items-center justify-between h-screen px-8">
          <div className="text-center w-1/2">
            <div className="w-full">
              <Image
                src="/students.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }} // optional
              />
            </div>
            <h2 className="text-xl font-semibold">
              ORV-Organize-Resolva-Vença
            </h2>
          </div>
          <div className="w-full">
            <div className="bg-zinc-300 w-[400px]  mx-auto rounded shadow-xl shadow-zinc-500">
              <div className="font-semibold text-xl text-center p-8 border-b border-zinc-600 text-zinc-800">
                <h3>Faça seu Login no ORV</h3>
              </div>
              <div className="p-4">
                <form>
                  <div className="py-2">
                    <TextField
                      label="Email"
                      placeHolder="Informe Seu Email"
                      type="email"
                      action={(e: { target: { value: string } }) =>
                        setUserLogin((userLogin) => ({
                          ...userLogin,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="py-2">
                    <TextField
                      label="Senha"
                      placeHolder="Informe sua Senha"
                      type="password"
                      action={(e: { target: { value: string } }) =>
                        setUserLogin((userLogin) => ({
                          ...userLogin,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full py-2">
                    <Button
                      title="Entrar"
                      action={() => console.log(userLogin)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
