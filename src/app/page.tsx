import { ChatList } from '../components/screens/chats/ChatList'
import { ChatPreview } from '../components/screens/chats/ChatPreview'
import { CurrentUser } from '../components/screens/chats/CurrentUser'

export default function ChatsPage() {
	return (
		<div>
			<div>
				<CurrentUser />
				<ChatList />
			</div>
			<div>
				<ChatPreview />
			</div>
		</div>
	)
}
