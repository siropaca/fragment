import { Button } from 'ui';

export default function Web() {
  console.log(process.env.NEXT_PUBLIC_API_TOKEN);

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
