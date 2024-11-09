import React from "react";
import Record from "./components/Record";

export default function History() {
  const list = [
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },

    { text: "Anana", type: "Word", palindrome: true },
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },
    { text: "Anana", type: "Word", palindrome: true },
    { text: "Hola", type: "Word", palindrome: false },
    { text: "Anana", type: "Word", palindrome: true },
  ];
  return (
    <div className="flex  w-[500px] h-[500px] border shadow-sm rounded-lg bg-card justify-center items-center">
      <div className="flex w-[90%] h-[93%] flex flex-col items-center">
        <div className="flex w-[95%] mt-2">
          <div className="w-[100%] font-semibold text-muted-foreground">
            Text
          </div>
          <div className="flex w-[100%] justify-center items-center font-semibold text-muted-foreground">
            Type
          </div>
          <div className="flex w-[100%] justify-end font-semibold text-muted-foreground">
            Check
          </div>
        </div>
        <div className="mt-3 border-t-[1px] w-[100%]"></div>
        <div className="flex flex-col w-[100%] overflow-auto">
          {list.map((record, index) => (
            <Record
              key={record.text}
              text={record.text}
              type={record.type}
              palindrome={record.palindrome}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
