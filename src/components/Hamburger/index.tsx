import styles from './Hamburger.module.css'

interface HamburgerProps {
  onClick: () => void
  isOpen: boolean
}

export default function Hamburger({ onClick, isOpen }: HamburgerProps) {
  return (
    <button
      type='button'
      className={`${styles.menu__icon} ${isOpen ? styles.open : ''} z-50`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
    </button>
  )
}
