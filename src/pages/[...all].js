import { useRouter } from 'next/navigation';

export default function CatchAllRoutes() {
  const router = useRouter();
  const { all } = router.query;

  return (
    <div>
      <h1>All Routes</h1>
      <ul>
        {all && all.map((route, index) => (
          <li key={index}>{route}</li>
        ))}
      </ul>
    </div>
  );
}
