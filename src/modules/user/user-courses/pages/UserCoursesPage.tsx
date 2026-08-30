export const UserCoursesPage = () => {
  return (
    <div className="min-w-80 rounded-container border border-border-subtle bg-bg-default shadow-surface select-none">
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
            <th>Tên Khóa học</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
