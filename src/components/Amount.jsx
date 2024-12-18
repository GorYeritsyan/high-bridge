import { cn } from "@/lib/utils.js";

const Amount = ({ amount }) => {
  // this component shows purchase amount depending on negative or positive value
  return (
    <div
      className={cn(
        "text-base font-medium",
        // if purchase amount is negative the color will be red, otherwise green
        amount.toString().at(0) === "-"
          ? "text-[rgba(255,75,74)]"
          : "text-[rgb(65,212,168)]",
      )}
    >
      {/*this logic added -$ for negative numbers and +$ for positives*/}
      {amount.toString().at(0) === "-"
        ? "-$" + amount.toString().slice(1)
        : "+$" + amount.toString()}
    </div>
  );
};
export default Amount;
