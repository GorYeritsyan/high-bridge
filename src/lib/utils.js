import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// export cn  function for more complex using

export function cn(...inputs){
    return twMerge(clsx(inputs))
}