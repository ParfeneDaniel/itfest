import Select from "./GroupSelect";

const Group = () => {
  const groups = [4, 7];
  return (
    <div className="header-info">
      {groups.length > 1 ? (
        <Select
        type="simple"
          options={groups.map((group) => {
            return "Grupa " + group;
          })}
        />
      ) : (
        <>Grupa {groups[0]}</>
      )}
    </div>
  );
};

export default Group;
