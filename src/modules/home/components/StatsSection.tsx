export const StatsSection = () => {
  const stats = [
    { value: "100%", label: "Thực hành thực tế" },
    { value: "50+", label: "Khóa học chuyên sâu" },
    { value: "24/7", label: "Hỗ trợ cộng đồng" },
    { value: "Clean", label: "Code & Architecture" },
  ];
  return (
    <section className="rounded-container bg-bg-brand/10 shadow-surface select-none">
      <div className="grid grid-cols-2 gap-8 px-2 py-12 md:grid-cols-4 md:px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <p className="text-2xl font-semibold text-text-default md:text-[28px]">
              {stat.value}
            </p>
            <p className="text-sm text-text-subtle">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
