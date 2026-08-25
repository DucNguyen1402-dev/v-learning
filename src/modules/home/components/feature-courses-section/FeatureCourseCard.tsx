type FeatureCourseCardProps = {
  category: string;
  level: string;
  title: string;
  lessons: number;
  duration: string;
};

export const FeatureCourseCard = ({
  category,
  level,
  title,
  lessons,
  duration,
}: FeatureCourseCardProps) => {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-700">
      <div>
        <div className="mb-4 flex items-center justify-between text-xs text-neutral-700">
          <span className="rounded bg-neutral-800 px-2 py-0.5 font-mono text-neutral-300">
            {category}
          </span>
          <span>{level}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold group-hover:text-neutral-200">
          {title}
        </h3>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-800/60 pt-6 text-xs text-neutral-700">
        <span>{lessons} bài học</span>
        <span>{duration}</span>
      </div>
    </article>
  );
};
