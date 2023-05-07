import { Button, Group, LoadingOverlay, Modal, PasswordInput, Space, TextInput } from '@mantine/core'
import { useApplicationContext } from '../useApplicationContext/useApplicationContext'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'

function LoginDialog({ opened, open, close }: { opened: boolean; open?: () => void; close?: () => void }) {
  const setCognitoUser = useApplicationContext().setCognitoUser
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const [visible, { toggle }] = useDisclosure(false);

  async function signIn() {
    toggle()
    try {
      const user = await Auth.signIn(username, password)
      setCognitoUser(user)
      toggle()
      close && close()
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {close && close()}}
        title="Authentication"
        centered
        size={'auto'}
      >
        {
          <>
            <LoadingOverlay visible={visible} overlayBlur={2} />
            <TextInput
              label={'Username'}
              onChange={(v) => setUsername(v.currentTarget.value)}
            />
            <Space h="md" />
            <PasswordInput
              label={'Password'}
              onChange={(v) => setpassword(v.currentTarget.value)}
            />
            <Space h="md" />
            <Button variant="outline" fullWidth onClick={signIn} disabled={!username || !password} color={'violet'}>Confirm</Button>
          </>
        }
      </Modal>
    </>
  )
}

export default LoginDialog
