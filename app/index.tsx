import { Stack, Link, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  // return <Redirect href="/welcome" />;
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Link href={'/welcome'}>Welcome screen</Link>
      </Container>
    </>
  );
  // return
  //   <>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <ScreenContent path="app/index.tsx" title="Home" />

  //       {/* <Text className="mx-4 bg-purple-400 text-center text-3xl text-red-500">Hello</Text> */}

  //       <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
  //         <Button title="Show Details" />
  //       </Link>
  //     </Container>
  //   </>
  // );
}
