import GameSession from "@/components/GameSession";
import StudentChoices from "@/components/StudentChoices";
import Cards from "@/components/Cards";
import PerformanceInsight from "@/components/PerformanceInsight";

export const metadata = {
  title: "BeHumane Educator Dashboard",
  description: "BeHumane Educator Dashboard",
};

export const revalidate = 10;

const fetchSessionData = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1",
  );
  return await response.json();
};

const fetchStudentChoices = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1/choices",
  );
  return await response.json();
};

const fetchStudentInsight = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1/insights",
  );
  return await response.json();
};

const DashboardPage = async () => {
  const sessionData = await fetchSessionData();
  const studentChoices = await fetchStudentChoices();
  const studentInsight = await fetchStudentInsight();

  return (
    <section id="dashboard">
      <section id="game-session" className="flex flex-row w-auto my-5">
        <GameSession data={sessionData}/>
      </section>
      <section
        id="colums"
        className="mt-4 flex flex-grow flex-col md:flex-row md:mt-6 md:gap-6"
      >
        <div className="w-full w-rounded-sm pt-7.5 mb-5 shadow-default sm:px-7.5 md:w-1/2">
          <StudentChoices data={studentChoices}/>
            <section id="cards" className="hidden md:flex py-5 w-full">
                <Cards data={studentChoices}/>
            </section>
        </div>

        <div className="w-full rounded-sm pt-7.5 mb-5 shadow-default sm:px-7.5 md:w-1/2">
          <PerformanceInsight data={studentInsight}/>
        </div>

        <section id="cards-mobile" className="md:hidden py-5 w-full">
          <Cards data={studentChoices}/>
        </section>
      </section>

    </section>
  );
};

export default DashboardPage;
