import { connection } from 'next/server';
import { getMockReleases } from '@/src/services/api/releases';
import { QualityBadge } from '@/src/components/features/quality/QualityBadge';

export default async function DashboardPage() {
    await connection();

    const releases = await getMockReleases();

    return (
        <main className="min-h-screen bg-slate-50 p-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-6">
                <header className="border-b pb-4">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">K-Pop Release Intelligence</h1>
                    <p className="text-slate-500 mt-2">Evaluasi performa rilis dengan transparansi kualitas data.</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {releases.map((release) => (
                        <div
                            key={release.id}
                            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">{release.title}</h2>
                                    <p className="text-sm font-medium text-slate-600">{release.artist}</p>
                                </div>
                                <QualityBadge state={release.meta.quality_state} />
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 text-sm text-slate-500 flex justify-between">
                                <span>{release.format}</span>
                                <span>{new Date(release.release_date).toLocaleDateString('id-ID')}</span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}