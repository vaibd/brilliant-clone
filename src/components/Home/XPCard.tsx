import Card from "../Shared/Card";

interface XPCardProps {
  currentXP: number;
  targetXP: number;
}

const XPCard = ({ currentXP, targetXP }: XPCardProps) => {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <img
          src="assets/images/leagues-locked.svg"
          alt="star"
          className="size-14"
        />

        <div>
          <h3 className="font-bold">UNLOCK LEAGUES</h3>
          <p className="text-gray-500">
            {currentXP} of {targetXP} XP
          </p>
        </div>
      </div>
    </Card>
  );
};

export default XPCard;
