import { DataQualityState } from '../../../types/api';
import clsx from 'clsx';

interface QualityBadgeProps {
    state: DataQualityState;
}

export function QualityBadge({ state }: QualityBadgeProps) {
    const colorMap: Record<DataQualityState, string> = {
        complete: 'bg-green-100 text-green-700 border-green-200',
        partial: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        stale: 'bg-orange-100 text-orange-700 border-orange-200',
        conflict: 'bg-red-100 text-red-700 border-red-200',
        unavailable: 'bg-gray-100 text-gray-700 border-gray-200',
    };

    return (
        <span className={clsx(
            "px-2.5 py-0.5 rounded-full text-xs font-semibold border uppercase tracking-wider",
            colorMap[state]
        )}>
      {state}
    </span>
    );
}