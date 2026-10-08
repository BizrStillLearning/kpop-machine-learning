export type DataQualityState = 'complete' | 'partial' | 'stale' | 'conflict' | 'unavailable';

export interface QualityMetadata {
    quality_state: DataQualityState;
    source: 'official_api' | 'scraper' | 'user_submitted' | 'mock';
    timestamp: string;
    warning_message?: string;
}

export interface ReleaseCatalog {
    id: string;
    artist: string;
    title: string;
    release_date: string;
    format: 'Single' | 'Mini Album' | 'Full Album';
    meta: QualityMetadata;
}