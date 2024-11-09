"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { BookCheck, BookX } from "lucide-react";
import History from "./components/history/History";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center md:flex-col lg:flex-row">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Palindrome Checker</CardTitle>
            <CardDescription>
              Check if a word or phrase is palindrome
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center">
                <Input
                  id="textInput"
                  placeholder="Enter word or phrase"
                  type="text"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () => {
                const check = true;
                toast(
                  check
                    ? `"${textInput}" is a palindrome word`
                    : `"${textInput}" is not a palindrome word`,
                  {
                    description: "previously verified word or phrase",
                    icon: check ? (
                      <BookCheck className="w-5 h-5 text-green-500" />
                    ) : (
                      <BookX className="w-5 h-5 text-red-500" />
                    ),
                    classNames: {
                      title: "ml-3",
                      description: "ml-3",
                      icon: "ml-1",
                    },
                  }
                );
              }}
              className="w-[100%]"
            >
              Check
            </Button>
          </CardFooter>
        </Card>
        <History />
      </main>
      <Toaster />
    </div>
  );
}
