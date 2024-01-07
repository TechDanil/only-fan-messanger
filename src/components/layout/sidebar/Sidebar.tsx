'use client'

import { MAIN } from '@/configs/index.config'
import cn from 'clsx'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.scss'
import { MENU } from './sidebar.data'

export function Sidebar() {
	const pathname = usePathname()

	return (
		<aside className={styles.sidebar}>
			<Link href={MAIN} style={{ marginBottom: '0' }}>
				<Image src='/logo.svg' priority alt='logo' width={40} height={40} />
			</Link>
			<div>
				{MENU.map(({ id, url, Icon }) => (
					<Link
						key={id}
						href={url}
						className={cn({
							[styles.active]: pathname === url,
						})}
					>
						<Icon size={30} />
					</Link>
				))}
			</div>
			<Sun />
		</aside>
	)
}
