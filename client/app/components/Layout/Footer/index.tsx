import Link from 'next/link'
import { FC } from 'react'

import styles from '../Layout.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footerWrapper + ' ' + styles.footer}>
			<div className={styles.footerInner}>
				<div>
					<div className={styles.footerAddress}>
						<h4>Адрес</h4>

						<address>Ярославль, ул. Поушкина роша, д. 1</address>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.580392645568!2d39.87625075725819!3d57.64603781029672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b291724c0ccad7%3A0xe083706db18f145c!2z0JHQuNC-0L_QvtC90LQ!5e0!3m2!1sru!2sru!4v1682420735126!5m2!1sru!2sru'
							width='400'
							height='300'
							loading='lazy'
						/>
					</div>
					<div className={styles.footerContact}>
						<h4>Контакты</h4>
						<div>Номер телефона: +79999999999</div>
						<div>Номер телефона: 84852797710</div>
						<h4>Мессенджеры</h4>
						<div>+79159690467 телеграм</div>
						<h4>Директор</h4>
						<div>Герасимов Александр Борисович</div>
						<h4>Почта</h4>
						<div>gerasimov@uniyar.ac.ru</div>
					</div>
					<div className={styles.footerLinks}>
						<h4>Меню</h4>
						<ul>
							<li>
								<Link href=''>Компетенции</Link>
							</li>
							<li>
								<Link href=''>Разработки</Link>
							</li>
							<li>
								<Link href=''>Сотрудники</Link>
							</li>
							<li>
								<Link href=''>Курсы</Link>
							</li>
							<li>
								<Link href=''>Новости</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className='my-10 bg-black' />
				<div className={styles.footerCopyright}>@2023 RTS Все права защищены. Разработчик ....</div>
			</div>
		</footer>
	)
}

export default Footer
