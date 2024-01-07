import { CHATS, FRIENDS, PHONE, SETTINGS } from '@/configs/index.config'
import { MessagesSquare, Phone, Settings, Users2 } from 'lucide-react'

export const MENU = [
	{
		id: 1,
		url: FRIENDS,
		Icon: Users2,
	},

	{
		id: 2,
		url: PHONE,
		Icon: Phone,
	},

	{
		id: 3,
		url: CHATS,
		Icon: MessagesSquare,
	},

	{
		id: 4,
		url: SETTINGS,
		Icon: Settings,
	},
]
