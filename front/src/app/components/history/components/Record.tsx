import { BookCheck, BookX } from "lucide-react";
import React from "react";

interface Props {
  text: string;
  type: string;
  palindrome: boolean;
}

export default function Record(props: Props) {
  return (
    <div className="flex flex-col w-[100%] text-sm hover:bg-muted items-center">
      <div className="w-[95%]">
        <div className="flex py-4">
          <div className="w-[100%]">
            <h6>"{props.text}"</h6>
          </div>

          <h6 className="ml-2 text-muted-foreground">{props.type}</h6>

          <div className="flex w-[100%] justify-end">
            <div className="flex">
              <h6>{props.palindrome ? "palindrome" : "non-palindrome"}</h6>
              {props.palindrome ? (
                <BookCheck className="w-5 h-5 text-green-500 ml-3" />
              ) : (
                <BookX className="w-5 h-5 text-red-500 ml-3" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
