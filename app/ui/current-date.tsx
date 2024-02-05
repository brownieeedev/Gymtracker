//Fonts
import { rubik } from "@/app/ui/utils/fonts";

export default function CurrentDate() {
  const today = new Date().toLocaleDateString();
  const dayofWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return (
    <div className="container flex justify-between">
      <div>{dayofWeek}</div>
      <div className={`${rubik.className} antialiased`}>{today}</div>
    </div>
  );
}
