import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/visage/front';

export const metadata: Metadata = defaultMetadata

export default function DrElardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}