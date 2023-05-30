import { FC } from 'react'

import Button from '../Button'

const AdminCreationButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать</Button>
}

export default AdminCreationButton
