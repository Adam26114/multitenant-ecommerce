import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function Home() {
    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
        collection: 'categories',
    });

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
