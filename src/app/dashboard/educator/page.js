import Card from "@/components/Card";
import Badges from "@/components/Badges";
import GameSelector from "@/components/GameSelector";

export const metadata = {
  title: "BeHumane Student Dashboard",
  description: "BeHumane Student Dashboard",
};
export const revalidate = 10;

const StudentDashboardPage = async () => {
  const badgeElements = [
    {
      icon: "badge-social.svg",
      text: "Social skills",
      points: 125,
      progress: 50,
    },
    {
      icon: "badge-emotional.svg",
      text: "Emotional skills",
      points: 35,
      progress: 35,
    },
    {
      icon: "badge-digital.svg",
      text: "Digital wellbeing",
      points: 35,
      progress: 35,
    },
  ];

  return (
    <section id="student-dashboard">
      <section id="first-row">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-6 lg:gap-10 xl:gap-20 flex-grow">
          <div id="card" className="w-full">
            <Card />
          </div>
          <div id="badges" className="flex flex-grow h-full justify-between gap-3">
            <Badges items={badgeElements} />
          </div>
        </div>
      </section>
      <section id="second-row" className="pt-8 pb-8">
        <GameSelector />
      </section>
    </section>
  );
};

export default StudentDashboardPage;
