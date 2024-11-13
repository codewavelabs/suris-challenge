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
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { BookCheck, BookX, CircleOff, NotebookPen } from "lucide-react";
import History from "./components/history/History";
import { checkPalindrome } from "@/services/api";

export default function Home() {
  const [textInput, setTextInput] = useState("");

  async function checkSend() {
    try {
      const { text, type, typeCheck, isPalindrome } = await checkPalindrome(
        textInput
      );
      const title = `"${text}" is ${
        !isPalindrome ? "not" : ""
      } a palindrome ${type}`;

      const description =
        typeCheck == "history" ? `Already verified` : `New Verified`;
      const icon = isPalindrome ? (
        <BookCheck className="w-5 h-5 text-green-500" />
      ) : (
        <BookX className="w-5 h-5 text-red-500" />
      );
      toast(title, {
        description,
        icon,
        classNames: {
          title: "ml-3",
          description: "ml-3",
          icon: "ml-1",
        },
      });
    } catch {
      toast("Error verifying", {
        icon: <CircleOff className="w-5 h-5 text-red-500" />,
        classNames: {
          title: "ml-3",
          description: "ml-3",
          icon: "ml-1",
        },
      });
    }
  }

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
              onClick={() => {
                !!textInput
                  ? checkSend()
                  : toast("Text or phrase required", {
                      description: "You must enter a text or phrase to verify",
                      icon: <NotebookPen className="w-5 h-5 " />,
                      classNames: {
                        title: "ml-3",
                        description: "ml-3",
                        icon: "ml-1",
                      },
                    });
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
