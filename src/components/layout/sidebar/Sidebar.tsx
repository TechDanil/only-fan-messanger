import { CHATS, FRIENDS, PHONE, SETTINGS } from '@/configs/index.config'
import { MessagesSquare, Phone, Sun, Users2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Image src='/logo.svg' priority alt='logo' width={40} height={40} />
			<div>
				<Link href={FRIENDS}>
					<Users2 />
				</Link>

				<Link href={PHONE}>
					<Phone />
				</Link>

				<Link href={CHATS}>
					<MessagesSquare />
				</Link>

				<Link href={SETTINGS}>
					<MessagesSquare />
				</Link>
			</div>
			<Sun />
		</aside>
	)
}
