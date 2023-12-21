import Badge from "@/components/Badge";
import ProgressBar from "@/components/ProgressBar";

const Badges = ({ items }) => {
  return (
    <>
      {items.map((badgeElement, index) => (
        <div key={`badges-${index}`}>
          <Badge
            icon={badgeElement.icon}
            text={badgeElement.text}
            point={badgeElement.points}
          />
          <div>
            <ProgressBar progress={badgeElement.progress} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Badges;
