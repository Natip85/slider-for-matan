import { TextSlider } from "@/components/TextSlider";
const messages = [
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 1",
    subtext: "סה״כ 36 תלונות התקבלו החודש",
  },
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 2",
    subtext: "סה״כ 37 תלונות התקבלו החודש",
  },
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 3",
    subtext: "סה״כ 38 תלונות התקבלו החודש",
  },
];
export default function Home() {
  return (
    <div>
      <div className="w-fit mx-auto p-10">
        <TextSlider messages={messages} />
      </div>
    </div>
  );
}
