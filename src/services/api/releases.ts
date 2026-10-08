export async function getMockReleases(): Promise<ReleaseCatalog[]> {
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    return [
        {
            id: "REL-2023-001",
            artist: "NewJeans",
            title: "Get Up",
            release_date: "2023-07-21",
            format: "Mini Album",
            meta: {
                quality_state: "complete",
                source: "mock",
                timestamp: "2024-03-01T12:00:00.000Z",
            }
        },
        {
            id: "REL-2023-002",
            artist: "aespa",
            title: "Drama",
            release_date: "2023-11-10",
            format: "Mini Album",
            meta: {
                quality_state: "partial",
                source: "scraper",
                timestamp: "2024-02-28T10:30:00.000Z",
                warning_message: "Data streaming platform tertunda"
            }
        },
        {
            id: "REL-2024-001",
            artist: "LE SSERAFIM",
            title: "EASY",
            release_date: "2024-02-19",
            format: "Mini Album",
            meta: {
                quality_state: "stale",
                source: "mock",
                timestamp: "2024-02-21T08:15:00.000Z",
            }
        }
    ];
}