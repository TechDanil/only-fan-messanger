import { Sun } from 'lucide-react'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Sidebar.module.scss'
import { MENU } from './sidebar.data'

export function Sidebar() {
	const headersList = headers()
	const headerUrl = headersList.get('referer')

	return (
		<aside className={styles.sidebar}>
			<Image src='/logo.svg' priority alt='logo' width={40} height={40} />
			<div>
				{MENU.map(menuItem => (
					<Link key={menuItem.id} href={menuItem.url}>
						<menuItem.Icon size={30} />
					</Link>
				))}
			</div>
			<Sun />
		</aside>
	)
}
