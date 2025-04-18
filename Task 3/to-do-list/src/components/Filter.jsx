const Filter = ({ setFilter, currentFilter }) => {
    const filters = ["all", "completed", "pending"];
    return (
      <div className="flex justify-center gap-3 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded hover:cursor-pointer ${
              currentFilter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    );
  };
  
  export default Filter;
  