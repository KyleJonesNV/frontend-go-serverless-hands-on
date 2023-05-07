import Link from 'next/link'
import LoginDialog from '@/components/login/login'
import { useDisclosure } from '@mantine/hooks'
import { useApplicationContext } from '@/components/useApplicationContext/useApplicationContext'

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false)
  const user = useApplicationContext().cognitoUser

  return (
    <div>
      <LoginDialog
        opened={opened}
        open={open}
        close={close}
      />
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="my-5">{user ? 'Hello ' + user?.getUsername() + '!' : 'Hello!'}</div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {!user && (
            <li>
              <button onClick={() => open()}>{'Sign In'}</button>
            </li>
          )}
          {user && (
            <li>
              <Link href="/movies">Movies</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
