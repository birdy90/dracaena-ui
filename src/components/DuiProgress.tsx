import React from 'react';

type Props = {
  className?: string,
  progress: number,
  withPercentage?: boolean,
};

function DuiProgress(props: Props) {
  const progress = props.progress ?? 0;

  return (
    <div className={`flex items-center gap-2 h-5 ${props.className}`}>
      <div className="relative grow h-2 bg-stone-200 w-full rounded-xl">
        <div
          className="absolute top-0 left-0 h-2 bg-emerald-500 transition-size rounded-xl"
          style={{ width: `max(55px, ${progress}%)` }}
        >
          { props.withPercentage ? (
            <span className="
                        text-sm text-stone-100 bg-emerald-500 px-2 rounded-xl
                        absolute top-1/2 -translate-y-1/2 right-1
                    "
            >
              {progress.toFixed(1)}
              %
            </span>
          ) : null }
        </div>
      </div>
    </div>
  );
}

export default DuiProgress;
