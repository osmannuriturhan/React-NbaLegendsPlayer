import PlayerCard from "./PlayerCard";

const CardContainer = ({ searchText }) => {
  return (
    <div className="card-container">
      <div className="card">
        <PlayerCard searchText={searchText} />
      </div>
    </div>
  );
};

export default CardContainer;
