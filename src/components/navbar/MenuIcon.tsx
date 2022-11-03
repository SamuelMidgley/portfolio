interface MenuIconProps {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuIcon = (props: MenuIconProps) => {
  const { showMenu, setShowMenu } = props

  return (
    <div onClick={() => setShowMenu((prevState: any) => !prevState)}>
      {showMenu ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <path d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      )}
    </div>
  )
}

export default MenuIcon
